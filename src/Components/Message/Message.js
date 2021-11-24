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
import { useHistory } from 'react-router'

const Message = () => {
  const [text, setText] = useState('')
  const history = useHistory()
  const submit = () => {
    if (!localStorage.getItem('token')) {
      alert('로그인이 필요합니다.')
      history.push('/login')
    } else if (!text) {
      alert('쪽지 내용을 작성해 주세요.')
    } else {
      const token = localStorage.getItem('token')
      axios
        .post(
          'https://58012740-20bb-4b6d-b6ae-dc77d28bb281.mock.pstmn.io/note/',
          {
            receiver: 11,
            body: text,
          },
          {
            headers: {
              'Content-type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            console.log(response)
            alert('쪽지가 성공적으로 발송되었습니다.')
          }
        })
        .catch((error) => {
          if (error.response.request.status === 400) {
            alert('오류가 발생했습니다. 다시 작성해 주세요.')
          } else if (error.response.request.status === 500) {
            alert('정상적인 접근이 아닙니다.')
          }
        })
    }
  }
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
        <SubmitButton onClick={() => submit()}>
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
