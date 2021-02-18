import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const UserInfoContainer = styled.div`
  width:33%;
  height: auto;
  padding:3rem;
  background-color: rgba(	51, 162, 255, .7);
`

export const UserInfo = () => {

  const userlogged = useSelector((state) => state.userlogged)
  // const users = useSelector((state) => state.users)

  const users = useSelector((state) =>
    state.users.find((user) => user.username == userlogged[0].username.username )
  )
  console.log('userlogged',userlogged)
  console.log('users',users)
  return (
    <>
      <UserInfoContainer>
       <p>{users.name}</p>
       <p>{users.age}</p>
       <p>Blank~~!</p>
      </UserInfoContainer>
    </>
  );
}