import React from 'react'
import styled from 'styled-components/macro'
import EmptyHeart from 'Assets/Icon/icon-heart-outlined22px@2x.png'
import Comment from 'Assets/Icon/icon-comments22px@2x.png'

export default function PostReactionButton() {
  return (
    <Wrapper>
      <HeartBtn src={EmptyHeart} />
      <HeartNum>39</HeartNum>
      <CommentBtn src={Comment} />
      <CommentNum>9</CommentNum>
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
const HeartBtn = styled(ReactionBtn)``
const CommentBtn = styled(ReactionBtn)`
  margin-left: 20px;
`
const ReactionNum = styled.span`
  font-size: 14px;
  margin-left: 10px;
`
const HeartNum = styled(ReactionNum)``
const CommentNum = styled(ReactionNum)``
