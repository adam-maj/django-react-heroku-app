import React, { useContext } from 'react';
import { NotificationContext } from '../../context/NotificationContext';
import { Notification } from '../../styles/notifications/NotificationStyles';
import { Text } from '../../styles/main/MainStyles';

export default function Notifications() {
  const { notification, deleteNotification } = useContext(NotificationContext);
  const error = notification.toUpperCase().includes('ERROR');

  if (!notification) {
    return null;
  }

  return (
    <Notification error={error}>
      <i 
        style={{ 
          color: 'white', 
          marginRight: "15px" 
        }} 
        class={`fas ${error ? 'fa-exclamation-circle' : 'fa-check-circle'}`}   
      />
      <Text fs="14px" color="white">
        {notification}
      </Text>
      <i 
        onClick={deleteNotification}
        style={{ 
          color: 'white', 
          marginLeft: "30px",
          marginRight: "-30px", 
          cursor: 'pointer' 
        }} 
        class="fas fa-times" 
      />
    </Notification>  
  )
}
