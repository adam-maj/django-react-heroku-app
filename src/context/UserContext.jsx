import React, { useState, useEffect, createContext } from 'react';
import * as api from '../api/api';

export const UserContext = createContext()

export default function UserProvider({ children }) {
  const [username, setGlobalUsername] = useState(null);

  useEffect(() => {
    api
      .current_user()
      .then(res => {
        setGlobalUsername(res.username)
      })
  }, [])

  return (
    <UserContext.Provider
      value={{
        username: username,
        setGlobalUsername: setGlobalUsername
      }}
    >
      {children} 
    </UserContext.Provider>
  )
}