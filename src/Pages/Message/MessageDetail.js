import React from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'

import {
  MessageDiv,
  MessageLineUnderName,
} from 'Components/Message/MessageLayout'
import MessageDetail from 'Components/Message/MessageDetail'

const MessageDetailPage = () => {
  return (
    <Layout>
      <MessageDetail />
    </Layout>
  )
}

export default MessageDetailPage
