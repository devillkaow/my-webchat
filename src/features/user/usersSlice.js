import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Stewie suie', username: 'stewie', password: 'suie' },
  { id: '1', name: 'kaow kaow', username: 'kaow', password: 'kaow' },
  { id: '2', name: '000000000', username: 'zero', password: 'zero' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
