import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = []

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.unshift(action.payload)
      },
      prepare(content, userId) {
        return {
          payload: {
            id: nanoid(),
            content,
            user: userId,
            reactions: {
              userThumbsUp: [],
              thumbsUp: 0,
              // userHeart: [],
              // heart: 0,
            },
            comments: []
          },
        }
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction, user } = action.payload
      const existingPost = state.find((post) => post.id === postId)
      const findUser = existingPost.reactions.userThumbsUp.filter(users => users == user)
      const userr =  (element) => element == user;
      if(findUser.length == 0){
        existingPost.reactions.userThumbsUp.push(user)
        existingPost.reactions[reaction]++
      }
      else {
        const alreadyLiked = existingPost.reactions.userThumbsUp.findIndex(userr)
        existingPost.reactions.userThumbsUp.splice(alreadyLiked, 1)
        existingPost.reactions[reaction]--
      }

      console.log('find',findUser)
      console.log('find',findUser.length)


      // if ( existingPost.reactions[reaction] <= 0 ) {
      //   existingPost.reactions[reaction]++
      // } 
      /* //////////เอาออกตอนทำuser////////// */
      // else {
      //   existingPost.reactions[reaction]--
      // }
    },
    commentAdded(state, action) {
      const { postId, comment ,userComment} = action.payload
      const existingPost = state.find((post) => post.id === postId)
      existingPost.comments.push({commentcontents:comment,userComments:userComment})
      // existingPost.comments.push({userComments:userComment})

    },
    postDeleted(state, action){
      const { postId } = action.payload

      console.log("postIdรับ",postId)
      
      const postIndex = state.findIndex((post) => post.id == postId)

      console.log("postIndex",postIndex)

      state.splice(postIndex, 1)
    }

},
})
export const { postAdded, reactionAdded, commentAdded, postDeleted } = postsSlice.actions


export default postsSlice.reducer
