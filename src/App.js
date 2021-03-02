import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import styled from 'styled-components'
import { PostsLane } from './component/lane/Post'
import { NavbarLane } from './component/lane/Navbar'
import { UserInfo } from './component/lane/UserInfo'
import { ViewPost } from "./features/post/ViewPost";
import GlobalStyle  from './component/GlobalStyle'

import Login from './component/login/Login'

import useToken from './useToken';

const Content = styled.div`
  display: flex;
  height: auto;
`

function App() {
  const { token, setToken } = useToken();

  let tokenKaow = token ? 
  (
      <>
        <GlobalStyle />
        <Router>
        <NavbarLane setToken={setToken} />
          <Content>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <React.Fragment>
                    <PostsLane />
                    <UserInfo />
                  </React.Fragment>
                )}
              />
              <Route exact path="/posts/:postId" component={ViewPost} />
              <Redirect to="/" />
            </Switch>
          </Content>
        </Router>
      </>
  ) : ( <Login component={Login} setToken={setToken} />)

  return tokenKaow
}

export default App
