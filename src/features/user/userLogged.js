import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const userSlice = createSlice({
    name: 'userlogged',
    initialState,
    reducers: {
        userAdded: {
            reducer(state, action) {
              state.unshift(action.payload)
            },
            prepare(username) {
              return {
                payload: {
                 username
                },
              }
            },
        },
        userLogout(state){
          state.pop()
        }
    }
})

export const { userAdded,userLogout } = userSlice.actions

export default userSlice.reducer