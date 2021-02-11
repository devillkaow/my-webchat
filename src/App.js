import React,{ useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Reset } from 'styled-reset'
import styled from 'styled-components'
import { PostsLane } from './component/lane/Post'
import { NavbarLane } from './component/lane/Navbar'
import { UserInfo } from './component/lane/UserInfo'
import { ViewPost } from "./features/post/ViewPost";

import Login from './component/login/Login'

import useToken from './useToken';

const Content=styled.div`
display: flex;
`

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  
  }

  return (
    <>
    <Reset />
    <Router>
      <NavbarLane/>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Content>
                  <PostsLane/>
                  <UserInfo/>
                </Content>
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={ViewPost} />
          <Redirect to="/" />
        </Switch>
      
    </Router>
    </>
  )
}

export default App
