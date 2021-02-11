import React, { useState } from 'react';
import styled from 'styled-components'
import Login from '../login/Login';

const UserInfoContainer = styled.div`
width:33%;
padding:2rem;
`

export const UserInfo = () => {
  // const [loggedUsername, setLoggedUsername] = useState(Login);
  // console.log(loggedUsername)
  return (
    <>
      <UserInfoContainer>
        {/* {loggedUsername} */}
      </UserInfoContainer>
    </>
  );
}