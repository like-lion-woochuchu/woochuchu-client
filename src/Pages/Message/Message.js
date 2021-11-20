import React from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'

import {
  MessageDiv,
  MessageLineUnderName,
} from 'Components/Message/MessageLayout'
import MessageDisplay from 'Components/Message/Message'

const Message = () => {
  return (
    <Layout>
      <MessageDiv>
        <MessageLineUnderName />
        <MessageDisplay />
      </MessageDiv>
    </Layout>
  )
}

export default Message
