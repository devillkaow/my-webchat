import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Author = styled.div`
  display: flex;
  justify-content:flex-end;
  font-size: 16px;
`

export const PostAuthor = ({ userId }) => {
  const userlogged = useSelector((state) => state.userlogged)

  const author = useSelector((state) =>
  state.users.find((user) => user.username == userlogged[0].username.username )
)

  return <Author>by {author ? author.name : 'Unknown'}</Author>
}
