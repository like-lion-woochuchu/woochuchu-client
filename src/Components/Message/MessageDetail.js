import styled from 'styled-components/macro'
import {
  MessageFrame,
  MessageDiv,
  MessageLineUnderName,
  MessageDetailDiv,
  MessageFrameInner,
  MessageReceiver,
  MessageReceiverIcon,
  MessageReceiverName,
  MessageReplyIcon,
  MessageBubble,
  MessageTime,
  MessageDate,
} from './MessageLayout'
import buttonIcon from 'Assets/Icon/icon-paw-print20px@2x.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router'
import Spinner from 'Components/Spinner/Spinner'

const MessageDetail = () => {
  const history = useHistory()
  const [data, setData] = useState([])
  const [loading, setLoding] = useState(true)
  const location = useLocation()
  const state = location.state
  var last = useState('')
  var flag = true

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      alert('로그인이 필요합니다.')
      history.push('/login')
    } else {
      axios
        .get(
          `https://58012740-20bb-4b6d-b6ae-dc77d28bb281.mock.pstmn.io/note/5/`,
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
            setData(response.data.results.data)
            setLoding(false)
          }
        })
        .catch((error) => {
          alert('정상적인 접근이 아닙니다.')
          history.push('/')
        })
    }
  }, [])
  return (
    <>
      <MessageDiv>
        <MessageReceiver>
          <MessageReceiverIcon />
          <MessageReceiverName>nickname</MessageReceiverName>
          <MessageReplyIcon onClick={() => history.push('/message')} />
        </MessageReceiver>
        <MessageLineUnderName />
        <MessageFrame>
          {loading ? (
            <Spinner />
          ) : (
            data.map((message) => {
              if (message.created_at.split('T')[0] !== last) {
                flag = true
                last = message.created_at.split('T')[0]
              } else {
                flag = false
              }

              return (
                <>
                  {flag ? <MessageDate>{last}</MessageDate> : null}
                  <MessageDetailDiv
                    key={message.id}
                    me={message.sender.id === 8}
                    len={-470 + message.body.length}
                  >
                    {message.sender.id === 8 ? (
                      <MessageTime me={true}>
                        {message.created_at.split('T')[1]}
                      </MessageTime>
                    ) : null}
                    <MessageBubble
                      key={message.id}
                      me={message.sender.id === 8}
                    >
                      {message.body}
                    </MessageBubble>
                    {message.sender.id !== 8 ? (
                      <MessageTime me={false}>
                        {message.created_at.split('T')[1]}
                      </MessageTime>
                    ) : null}
                  </MessageDetailDiv>
                </>
              )
            })
          )}
        </MessageFrame>
      </MessageDiv>
    </>
  )
}

export default MessageDetail
