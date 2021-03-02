import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const UserInfoContainer = styled.div`
  width:33%;
  height: auto;
  padding:3rem;
`
const Text = styled.div`
font-size: 30px;
display: flex;
justify-content: left;
margin: 18px 0;
`


export const UserInfo = () => {

  const userlogged = useSelector((state) => state.userlogged)

  const users = useSelector((state) =>
    state.users.find((user) => user.username === userlogged[0].username )
  )

  console.log('userlogged',userlogged)
  console.log('users',users)
  return (
    <>
      <UserInfoContainer>
       <Text>Name : {users.name}</Text>
       <Text>Age : {users.age}</Text>
       <Text>Blank~~!</Text>
      </UserInfoContainer>
    </>
  );
}