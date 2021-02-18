import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { reactionAdded } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  heart: '❤️',
}

const Button = styled.button`
  margin: 8px 8px 8px 0;
  border: none;
  border-radius: 4px;
  background-color: rgba(75, 180, 255, 0.8);
  color: white;
`

export const LikeButton = ({ post }) => {
  const dispatch = useDispatch()

  const likeButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <Button
        key={name}
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </Button>
    )
  })
  
  return <div>{likeButtons}</div>
}
