import React, { useState, useContext } from 'react';
import { 
  Flex, Section, Text, Link, Heading, Button, Input, Label
} from '../../styles/main/MainStyles';
import { UserContext } from '../../context/UserContext';
import { NotificationContext } from '../../context/NotificationContext';
import { useHistory } from "react-router-dom";
import * as api from '../../api/api';

export default function Login() {
  const { setGlobalUsername } = useContext(UserContext);
  const { addNotification } = useContext(NotificationContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function login() {
    api
      .login(username, password)
      .then(async res => {
        setGlobalUsername(username)
        addNotification(`Logged in as ${username}`)
        history.push('/')
      })
      .catch(err => {
        addNotification('Error: Incorrect Username or Password')
      })
  }

  return (
    <Section top>
      <Flex fd="column" w="400px" mb="100px" br="8px" p="20px">
        <Heading color="#222222">Sign In</Heading>
        <Label>Username:</Label>
        <Input
          type="text" 
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
        <Label>Password:</Label>
        <Input
          type="password" 
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}  
        />
        <Text fs="12px" color="grey">
          Don't have an account?&nbsp;
          <Link href="/register" color="#0645AD" fs="12px" underline>
            Create account.
          </Link>
        </Text>
        <Button mt="10px" onClick={login} primary>Login</Button>
      </Flex>
    </Section>
  )
}
