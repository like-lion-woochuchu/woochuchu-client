import styled from 'styled-components/macro'
import { MessageFrame, MessageDiv, MessageLineUnderName } from './MessageLayout'
import buttonIcon from 'Assets/Icon/icon-paw-print20px@2x.png'
import { useEffect, useState } from 'react'

const MessageDetail = () => {
  return (
    <>
      <MessageDiv>
        <MessageLineUnderName />
        <MessageFrame></MessageFrame>
      </MessageDiv>
    </>
  )
}

export default MessageDetail
