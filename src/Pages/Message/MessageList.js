import React from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import {
  MessageListDiv,
  MessageListFrame,
  MessageListIcon,
  MessageListText,
} from 'Components/Message/MessageListLayout'
import MessageListComponent from 'Components/Message/MessageList'

const MessageList = () => {
  return (
    <Layout>
      <MessageListDiv>
        <MessageListIcon />
        <MessageListText>쪽지함</MessageListText>
        <MessageListFrame>
          <MessageListComponent></MessageListComponent>
        </MessageListFrame>
      </MessageListDiv>
    </Layout>
  )
}

export default MessageList
