import styled from 'styled-components/macro'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'Components/Spinner/Spinner'
import MessageListOne from './MessageListOne'

const MessageListComponent = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoding] = useState(true)

  useEffect(() => {
    axios
      .get('https://58012740-20bb-4b6d-b6ae-dc77d28bb281.mock.pstmn.io/note/')
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
