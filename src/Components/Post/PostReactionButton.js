import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import EmptyHeart from 'Assets/Icon/icon-heart-outlined22px@2x.png'
import FilledHeart from 'Assets/Icon/icon-heart-filled22px@2x.png'
import Comment from 'Assets/Icon/icon-comments22px@2x.png'
import Message from 'Assets/Icon/message.png'
import axios from 'axios'
import getDataFromLocalStorage from 'Utils/Storage/GetDataFromLocalStorage'

export default function PostReactionButton({
  postId,
  type,
  message,
  numOfComments,
  numOfLikes,
  receiver,
  userLikeFlag,
  fetchTrigger,
}) {
  const [like, setLike] = useState(userLikeFlag)
  const [likesCount, setLikesCount] = useState(numOfLikes)
  const [commentsCount, setCommentsCount] = useState(numOfComments)
  const token = getDataFromLocalStorage('token')

  const handleLikeClick = async () => {
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/mybaby/${postId}/likes/`,
        { like_flag: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.results.like_flag) {
          setLikesCount((prev) => prev + 1)
        } else {
          setLikesCount((prev) => prev - 1)
        }
        setLike(res.data.results.like_flag)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    if (fetchTrigger) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/${type}/${postId}/comments/`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setCommentsCount(res.data.results.data.length))
    }
  }, [postId, type, token, fetchTrigger])

  const handleMessageClick = () => {
    // 메세지 전송 로직 추가
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
          <HeartNum>{likesCount}</HeartNum>
        </>
      )}
      <CommentBtn src={Comment} type={type} />
      <CommentNum>{commentsCount}</CommentNum>
      {message && (
        <MessageBox onClick={handleMessageClick}>
          <MessageBtn src={Message} type={type} />
          <MessageTitle>메세지 보내기</MessageTitle>
        </MessageBox>
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
