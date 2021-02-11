import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

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
  const [loggedUsername, setLoggedUsername] = useState('');

  const users = useSelector((state) =>
    state.users.find((user) => user.username === username )
  )
  console.log('users', users)

  // const users = useSelector((state) => state.users)
  // console.log('users', users)

  const handleSubmit = async e => {
    e.preventDefault();

    const token = await loginUser({
      username,
      password
    }); 

    if((username === users.username ) && (password === users.password)){
    setToken(token);
    setLoggedUsername(loggedUsername => loggedUsername = username)
    } else {
        alert('wrong, try again')
    }
  }
  // console.log('username', users.username)
  // console.log('password', users.password)
  console.log('logging username is', username)
  console.log('logging password is', password)
  console.log('logged username is', loggedUsername)

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};