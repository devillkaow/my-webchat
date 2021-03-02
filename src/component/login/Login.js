import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { userAdded } from '../../features/user/userLogged'
import styled from 'styled-components';

const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content:center;
`

const Title = styled.div`
font-size: 28px;
align-items: flex-start;
`

const Form = styled.form`
  display:flex;
  flex-direction: column;
  justify-content:center;
  width: 20%;
`

const Input = styled.input`
padding: 4px;
margin: 4px 0 12px 0;
width: 100%;
border-style: none none solid none;
`

const Button = styled.button`
align-items: center;
width: 20%;
background-color: rgba(	51, 162, 255, .5);
border: none;
border-radius: 4px;
padding: 8px ;
cursor: pointer;
 :hover{
  background-color: rgba(	51, 162, 255, .7);
 }
`

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  const users = useSelector((state) =>
    state.users.find((user) => user.username === username && user.password === password)
  )
  console.log('users', users)

  const handleSubmit = async e => {
    e.preventDefault();

    const token = await loginUser({
      username,
      password
    });

    if (username === users.username && password === users.password) {
      dispatch(userAdded(username))
      setToken(token);
    } else {
      alert('wrong, try again')
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {/* <Title>Please Log In</Title> */}
        <Title>Username</Title>
          <Input placeholder="USERNAME" type="text" onChange={e => setUsername(e.target.value)} />
        <Title>Password</Title>
          <Input placeholder="PASSWORD" type="password" onChange={e => setPassword(e.target.value)} />
        {/* <Link to='/'> */}
          <Button type="submit" >Submit</Button>
        {/* </Link> */}
      </Form>
    </Container>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};