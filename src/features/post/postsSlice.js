import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = []

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(content, userId) {
        return {
          payload: {
            id: nanoid(),
            content,
            user: userId,
            reactions: {
              thumbsUp: 0,
              heart: 0,
            },
            comment: []
          },
        }
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find((post) => post.id === postId)
      if ( existingPost.reactions[reaction] <= 0 ) {
        existingPost.reactions[reaction]++
      } 
      //เอาออกตอนทำuser
      else {
        existingPost.reactions[reaction]--
      }
    },
    commentAdded(state, action) {
      const { postId, comments } = action.payload
      const existingPost = state.find((post) => post.id === postId)
      existingPost.comment.push(comments)
    },
},
})
export const { postAdded, postUpdated, reactionAdded, commentAdded, postDeleted } = postsSlice.actions


export default postsSlice.reducer
