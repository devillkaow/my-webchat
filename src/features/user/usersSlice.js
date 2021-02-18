import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { 
    id: '0',
    name: 'Stewie suie', 
    username: 'stewie', 
    password: 'suie',
    age: '19',
    principles: '' 
  },
  { 
    id: '1', 
    name: 'kaow kaow', 
    username: 'kaow', 
    password: 'kaow',
    age: '20',
    principles: '' 
  },
  { id: '2', 
    name: '000000000', 
    username: 'zero', 
    password: 'zero',
    age: '21',
    principles: '' 
  },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
