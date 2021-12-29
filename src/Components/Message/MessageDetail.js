import styled from 'styled-components/macro'
import {
  MessageFrame,
  MessageDiv,
  MessageLineUnderName,
  MessageDetailDiv,
  MessageReceiver,
  MessageReceiverIcon,
  MessageReceiverName,
  MessageReplyIcon,
  MessageBubble,
  MessageTime,
  MessageDate,
} from './MessageLayout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router'
import Spinner from 'Components/Spinner/Spinner'
import jwtDecode from 'jwt-decode'

const MessageDetail = () => {
  const history = useHistory()
  const [data, setData] = useState([])
  const [loading, setLoding] = useState(true)
  const [id, setId] = useState()
  const location = useLocation()
  const state = location.state
  const token = localStorage.getItem('token')
  const decoded = jwtDecode(token)
  var last = useState('')
  var flag = true

  useEffect(() => {
    if (!state) {
      alert('정상적인 접근이 아닙니다.')
      if (history.length <= 1) {
        history.push('/')
      } else {
        history.goBack()
      }
    }

    if (!token) {
      alert('로그인이 필요합니다.')
      history.push('/login')
    } else {
      setId(parseInt(decoded.subject.split(':')[1]))
      axios
        .get(`${process.env.REACT_APP_API_URL}/note/${state.receiver}/`, {
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
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
          <MessageReceiverName>{state.nickname}</MessageReceiverName>
          <MessageReplyIcon
            onClick={() =>
              history.push('/message', {
                receiver: state.receiver,
                nickname: state.nickname,
              })
            }
          />
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
                    me={message.sender.id === id}
                  >
                    {message.sender.id === id ? (
                      <MessageTime me={true}>
                        {message.created_at.split('T')[1]}
                      </MessageTime>
                    ) : null}
                    <MessageBubble
                      key={message.id}
                      me={message.sender.id === id}
                    >
                      {message.body}
                    </MessageBubble>
                    {message.sender.id !== id ? (
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
