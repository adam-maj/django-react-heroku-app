import styled, { keyframes, css } from 'styled-components';

const slide = keyframes`
  0% {
    transform: translateX(100%)
  }
  40% {
    transform: translateX(-10%)
  }
  80% {
    transform: translateX(0%)
  }
`

export const Notification = styled.div`
  position: fixed;
  top: 80px;
  right: 15px;
  height: 50px;
  background: #85EF44;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
  border-radius: 5px;
  border-left: 8px solid #60D917;
  border-right: 30px solid #9AF661;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.2);
  animation: ${slide} 1s ease forwards;

  ${props =>
    props.error ? css`
      background: #EF4444; 
      border-left: 8px solid #D92E17;
      border-right: 30px solid #F05454;
    ` : null
  }
`