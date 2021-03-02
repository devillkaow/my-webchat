import React from "react";
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from '@blueprintjs/core'
import { userLogout } from '../../features/user/userLogged'

const NavbarContainer = styled.div`
background-color: steelblue;
text-align: center;
height: 10vh;
`

const IconContainer = styled.div`
padding: 2rem;
`

const style = {
  margin: '20px',
  cursor: 'pointer'
}

const logoutstyle = {
  float: 'right',
  cursor: 'pointer'
}

export const NavbarLane = ({setToken}) => {

const dispatch = useDispatch()

const handleLogout = () => {
  setToken(false)
  dispatch(userLogout)
}
  return (
    <>
      <NavbarContainer>
        <IconContainer>  
          <Icon icon="plus"  iconSize={20} style={style}  />
          <Link to="/">
             <Icon icon="home"  iconSize={20} style={style} />
          </Link>
          <Icon icon="notifications" iconSize={20} style={style} />
          <Link to="/login">
            <Icon 
              icon="log-out" 
              iconSize={20} 
              style={logoutstyle}
              onClick={handleLogout}
            />
           </Link>
        </IconContainer>
      </NavbarContainer>
    </>
  );
}