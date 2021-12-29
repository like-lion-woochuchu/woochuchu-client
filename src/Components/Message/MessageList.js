import styled from 'styled-components/macro'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Spinner from 'Components/Spinner/Spinner'
import MessageListOne from './MessageListOne'
import { useHistory } from 'react-router'

const MessageListComponent = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoding] = useState(true)
  const history = useHistory()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) {
      alert('로그인이 필요합니다.')
      history.push('/')
    }
    axios
      .get(`${process.env.REACT_APP_API_URL}/note/`, {
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response)
        setMessages(response.data.results.data)
        setLoding(false)
      })
  }, [])
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        messages.map((message) => {
          return (
            <>
              <MessageListOne message={message}></MessageListOne>
            </>
          )
        })
      )}
    </>
  )
}

export default MessageListComponent
