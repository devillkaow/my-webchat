import React from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Icon } from "@blueprintjs/core";

const NavbarContainer = styled.div`
background-color: steelblue;
text-align: center;
height: 80px;
`

const IconContainer = styled.div`
padding: 28px;
`

const style = {
  margin: '20px'
}

const logoutstyle = {
  float: 'right'
}


export const NavbarLane = () => {

const handleLogout = () => {
  localStorage.clear();
  window.location.href = '/';
}
  return (
    <>
      <NavbarContainer>
        <IconContainer>  
          <Icon icon="plus"  iconSize={20} style={style} />
          <Link to="/">
             <Icon icon="home"  iconSize={20} style={style} />
          </Link>
          <Icon icon="notifications" iconSize={20} style={style} />
          <Icon 
            icon="log-out" 
            iconSize={20} 
            style={logoutstyle}
            onClick={handleLogout}
          />
        </IconContainer>
      </NavbarContainer>
    </>
  );
}