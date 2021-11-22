import styled from 'styled-components/macro'
import {
  MessageFrame,
  MessageInputDiv,
  MessageInput,
  MessageSendButton,
  MessageLastsent,
} from './MessageLayout'
import buttonIcon from 'Assets/Icon/icon-paw-print20px@2x.png'
import { useEffect, useState } from 'react'

const MessageDisplay = () => {
  const [message, setMessage] = useState('')
  const [messageSent, setMessageSent] = useState('')
  const [send, setSend] = useState(false)

  useEffect(() => {}, [send])
  return (
    <>
      <MessageFrame>
        {send && messageSent ? (
          <MessageLastsent>{messageSent}</MessageLastsent>
        ) : null}
      </MessageFrame>
      <MessageInputDiv>
        <MessageInput
          placeholder={'메시지를 입력하세요.'}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></MessageInput>
        <MessageSendButton
          onClick={() => {
            setSend(true)
            setMessageSent(message)
            setMessage('')
          }}
        >
          <img src={buttonIcon} />
        </MessageSendButton>
      </MessageInputDiv>
    </>
  )
}

export default MessageDisplay
