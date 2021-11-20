import styled from 'styled-components/macro'
import {
  MessageFrame,
  MessageInputDiv,
  MessageInput,
  MessageSendButton,
} from './MessageLayout'
import buttonIcon from 'Assets/Icon/icon-paw-print20px@2x.png'

const MessageDisplay = () => {
  return (
    <>
      <MessageFrame></MessageFrame>
      <MessageInputDiv>
        <MessageInput placeholder={'메시지를 입력하세요.'}></MessageInput>
        <MessageSendButton>
          <img src={buttonIcon} />
        </MessageSendButton>
      </MessageInputDiv>
    </>
  )
}

export default MessageDisplay
