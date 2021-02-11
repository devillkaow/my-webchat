import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  const handleChange = (e) => setContent(e.target.value)

  const handleClicked = () => {
    if (content) {
      dispatch(postAdded(content, userId))
      setContent('')
      setUserId('')
    }
  }

                                                                                                           
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label>Content:</label>
        <input
          id="postContent"
          name="postContent"
          value={content}
          onChange={handleChange}
        />
        <button type="button" onClick={handleClicked}>
          Post
        </button>
      </form>
    </section>
  )
}
