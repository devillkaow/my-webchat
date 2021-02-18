import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { postAdded } from './postsSlice'

const TitleAdd = styled.div`
  text-align: left;
  padding: 20px;
  font-size: 24px;
`

const Form = styled.form`
  padding: 20px;
  margin: 0 0 4rem 0;
`

const Input = styled.textarea`
  padding: 20px 0 40px 16px;
  margin: 0 0 8px 0;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 20px;
  width: 97.5%;
  height: 20px;
    :focus{
      padding:20px 0px 40px 16px;
      
    }
`

const Button = styled.button`
  margin: 16px 0;
  background-color: steelblue;
  border-radius: 4px;
  padding: 16px 32px;
  border: none;
  float: right;
  cursor: pointer;
`

export const AddPostForm = () => {
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()

  const userlogged = useSelector((state) => state.userlogged)

  const users = useSelector((state) =>
  state.users.find((user) => user.username == userlogged[0].username.username )
)

  const handleChange = (e) => setContent(e.target.value)

  const handleClicked = () => {
    if (content) {
      dispatch(postAdded(content, userId))
      setContent('')
      setUserId('')
    }
  }

                                                                                                           
  return (
    <>
      <TitleAdd>Add a New Post</TitleAdd>
      <Form>
        <Input
          id="postContent"
          type="text"
          name="postContent"
          value={content}
          onChange={handleChange}
        />
        <Button type="button" onClick={handleClicked}>
          Post
        </Button>
      </Form>
    </>
  )
}
