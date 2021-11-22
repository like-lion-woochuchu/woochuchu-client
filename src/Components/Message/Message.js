import styled from 'styled-components/macro'
import {
  MessageDiv,
  MessageReceiverIcon,
  MessageReceiverName,
  MessageTextFrame,
  MessageReceiver,
} from './MessageLayout'
import submitIcon from 'Assets/Icon/icon-arrow-right-white16px@2x.png'
import { useState } from 'react'
import axios from 'axios'

const Message = () => {
  const [text, setText] = useState('')

  return (
    <>
      <MessageDiv height={'780px'}>
        <MessageReceiver>
          <MessageReceiverIcon />
          <MessageReceiverName>가나다 님</MessageReceiverName>
        </MessageReceiver>
        <MessageTextFrame
          placeholder={'쪽지 내용을 입력하세요.'}
          onChange={(e) => setText(e.target.value)}
        ></MessageTextFrame>
        <SubmitButton>
          보내기
          <SubmitIcon />
        </SubmitButton>
      </MessageDiv>
    </>
  )
}

const SubmitButton = styled.div`
  margin: 30px 15px 30px 505px;
  padding: 32px 40px 32px 40px;
  width: 170px;
  height: 90px;
  background: #1d1e20 0% 0% no-repeat padding-box;
  border-radius: 45px;
  text-align: center;
  font: normal normal bold 18px/26px Noto Sans KR;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`

const SubmitIcon = styled.img.attrs({
  src: submitIcon,
})`
  padding-top: 2px;
  margin-left: 12px;
  width: 9px;
  height: 16px;
`

export default Message
