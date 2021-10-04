import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import EmptyHeart from 'Assets/Icon/icon-heart-outlined22px@2x.png'
import FilledHeart from 'Assets/Icon/icon-heart-filled22px@2x.png'
import Comment from 'Assets/Icon/icon-comments22px@2x.png'
import axios from 'axios'

export default function PostReactionButton({
  type,
  numOfComments,
  numOfLikes,
}) {
  const [like, setLike] = useState(false)

  const handleLike = async () => {
    await axios
      .post(
        `https://58012740-20bb-4b6d-b6ae-dc77d28bb281.mock.pstmn.io/mybaby/:feed_id/likes`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJqZWN0IjoiMTA0MGJiNGFkOGIzNGI4ZTg0NjI3OGI4ZWZiMjFkYTQ6NSIsImV4cCI6MTYzMDkyNjY5OSwiaWF0IjoxNjMwOTI0ODk5fQ.B-ph_-baWGL5xxE6hSXbP8Fm-aecfg8Q-T0eisOT3Jw',
          },
        }
      )
      .then(setLike((prev) => !prev))
  }

  return (
    <Wrapper>
      {type === 'mybaby' && (
        <>
          {like ? (
            <HeartBtn src={FilledHeart} onClick={handleLike} />
          ) : (
            <HeartBtn src={EmptyHeart} onClick={handleLike} />
          )}
          <HeartNum>{numOfLikes}</HeartNum>
        </>
      )}
      <CommentBtn src={Comment} type={type} />
      <CommentNum>{numOfComments}</CommentNum>
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
