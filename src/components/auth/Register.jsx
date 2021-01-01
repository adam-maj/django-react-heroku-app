import React, { useState, useContext } from 'react';
import { 
  Flex, Section, Text, Link, Heading, Button, Input, Label
} from '../../styles/main/MainStyles';
import { useHistory } from "react-router-dom";
import { NotificationContext } from '../../context/NotificationContext';
import { UserContext } from '../../context/UserContext';
import * as api from '../../api/api';

export default function Register() {
  const { setGlobalUsername } = useContext(UserContext);
  const { addNotification } = useContext(NotificationContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function register() {
    api
      .register(username, password)
      .then(res => {
        setGlobalUsername(username)
        addNotification(`Created account ${username}`)
        history.push('/')
      })
      .catch(err => {
        addNotification('Error: Account Not Created')
      })
  }

  return (
    <Section top>
      <Flex fd="column" w="400px" p="20px" mb="100px" br="8px">
        <Heading color="#222222">Create Account</Heading>
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
          Already have an account?&nbsp;
          <Link href="/login" color="#0645AD" fs="12px" underline>
            Sign in.
          </Link>
        </Text>
        <Button mt="10px" onClick={register} primary>Register</Button>
      </Flex>
    </Section>
  )
}