import React, { useState, useEffect, createContext } from 'react';

export const NotificationContext = createContext()

export default function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [notification, setNotification] = useState('')

  useEffect(async () => {
    if (notifications.length > 0 && notifications[0] !== notification) {
      await sleep(25)
      setNotification(notifications[0])
    }
  }, [notifications])

  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  function addNotification(message) {
    let copy = notifications.slice()
    copy.push(message)
    setNotifications(copy)
  }

  async function deleteNotification() {
    setNotifications(notifications.slice(1))
    setNotification('')
  }

  return (
    <NotificationContext.Provider
      value={{
        notification: notification,
        addNotification: addNotification,
        deleteNotification: deleteNotification
      }}
    >
      {children} 
    </NotificationContext.Provider>
  )
}