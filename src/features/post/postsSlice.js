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
      //เอา remove ออก ตอนทำuser
      else {
        existingPost.reactions[reaction]--
      }
    },
    postUpdated(state, action) {
      const { postId, content } = action.payload
      const existingPost = state.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.content = content
      }
    },
    commentAdded(state, action) {
      const { postId, comments } = action.payload
      const existingPost = state.find((post) => post.id === postId)
      existingPost.comment.push(comments)
      }
  },
})
export const { postAdded, postUpdated, reactionAdded, commentAdded } = postsSlice.actions


export default postsSlice.reducer
