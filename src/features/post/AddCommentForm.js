import React, { useState }  from 'react'
import { useDispatch } from 'react-redux'

import { commentAdded } from './postsSlice'

export const Commentbox = ({ post }) => {
  const [comment, setComment] = useState('')
  
  const dispatch = useDispatch()

  const handleChange = (e) => setComment(e.target.value)

  const handleClick = () => {
    if (comment) {
      dispatch(commentAdded( { postId: post.id, comments: comment  }))
      setComment('')
    }
  }

  console.log('papapapost!!',post)
  console.log('cacacacomment',post.comment)

    const renderedComments = post.comment.map(commeted => 
      <h4>{commeted}</h4>
    )

    return(
      <div>
       {renderedComments}
        <form>
          <input
            type="text"
            id="CommentContent"
            name="CommentContent"
            value={comment}
            onChange={handleChange}
          />
          <button type="button" onClick={handleClick}>
          comment
          </button>
        </form>
    </div>
    )
  }
