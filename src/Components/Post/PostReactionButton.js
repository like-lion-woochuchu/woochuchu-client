import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import EmptyHeart from 'Assets/Icon/icon-heart-outlined22px@2x.png'
import FilledHeart from 'Assets/Icon/icon-heart-filled22px@2x.png'
import Comment from 'Assets/Icon/icon-comments22px@2x.png'
import Message from 'Assets/Icon/message.png'
import axios from 'axios'
import getDataFromLocalStorage from 'Utils/Storage/GetDataFromLocalStorage'
import MessageModal from 'Components/Message/MessageModal'

export default function PostReactionButton({
  type,
  message,
  numOfComments,
  numOfLikes,
  receiver,
}) {
  const [like, setLike] = useState(false)
  const [openMsgModal, setOpenMsgModal] = useState(false)
  const token = getDataFromLocalStorage('token')

  const handleLikeClick = async () => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/mybaby/:feed_id/likes/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(setLike((prev) => !prev))
      .catch((err) => console.log(err))
  }

  const handleMessageClick = () => {
    setOpenMsgModal((prev) => !prev)
  }

  return (
    <Wrapper>
      {type === 'mybaby' && (
        <>
          {like ? (
            <HeartBtn src={FilledHeart} onClick={handleLikeClick} />
          ) : (
            <HeartBtn src={EmptyHeart} onClick={handleLikeClick} />
          )}
          <HeartNum>{numOfLikes}</HeartNum>
        </>
      )}
      <CommentBtn src={Comment} type={type} />
      <CommentNum>{numOfComments}</CommentNum>
      {message && (
        <MessageBox onClick={handleMessageClick}>
          <MessageBtn src={Message} type={type} />
          <MessageTitle>메세지 보내기</MessageTitle>
        </MessageBox>
      )}
      {openMsgModal && (
        <MessageModal receiver={receiver} setOpenMsgModal={setOpenMsgModal} />
      )}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
`
const ReactionBtn = styled.img`
  width: 22px;
`
const HeartBtn = styled(ReactionBtn)`
  cursor: pointer;
`
const MessageBtn = styled(ReactionBtn)``
const CommentBtn = styled(ReactionBtn)`
  ${({ type }) =>
    type === 'mybaby' &&
    `
  margin-left: 20px;
  `}
`
const ReactionNum = styled.span`
  font-size: 14px;
  margin-left: 10px;
`
const HeartNum = styled(ReactionNum)``
const CommentNum = styled(ReactionNum)``
const MessageTitle = styled(ReactionNum)``
const MessageBox = styled.div`
  display: flex;
  margin-left: 18px;
  cursor: pointer;
`
