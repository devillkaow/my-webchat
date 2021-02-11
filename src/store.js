import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './features/post/postsSlice'
import usersReducer from './features/user/usersSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
})
