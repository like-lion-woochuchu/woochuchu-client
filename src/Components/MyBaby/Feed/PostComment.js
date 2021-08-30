import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Post from 'Components/MyBaby/Feed/Post'
import upArrow from 'Assets/Icon/icon-arrow-up@2x.png'
import downArrow from 'Assets/Icon/icon-arrow-down@2x.png'

export default function PostComment() {
  const [openCommentList, setOpenCommentList] = useState(false)

  const handleOpenCommentList = () => {
    setOpenCommentList((prev) => !prev)
  }

  return (
    <>
      <Wrapper>
        <MyProfileImg src="https://ifh.cc/g/s1AhKt.jpg" />
        <CommentInput type="text" placeholder="댓글쓰기..." />
        <SubmitBtn>작성</SubmitBtn>
      </Wrapper>
      <CommentsBtnContainer>
        <CommentsBtn onClick={handleOpenCommentList}>
          <CommentsNum>댓글 9</CommentsNum>
          {openCommentList ? (
            <CommentsArrow src={downArrow} />
          ) : (
            <CommentsArrow src={upArrow} />
          )}
        </CommentsBtn>
      </CommentsBtnContainer>
      {!openCommentList && (
        <CommentContainer>
          <CommentProfileContainer>
            <CommentProfileImg src="https://ifh.cc/g/s1AhKt.jpg" />
            <CommentUserName>name</CommentUserName>
            <CommentTime>04:03pm</CommentTime>
          </CommentProfileContainer>
          <Comment>comment</Comment>
        </CommentContainer>
      )}
    </>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 24px;
  height: 24px;
`
const MyProfileImg = styled(ProfileImg)``
const CommentProfileImg = styled(ProfileImg)``

const CommentInput = styled.input`
  width: 90%;
  margin-left: 10px;
  display: flex;
  align-items: center;
  height: 24px;
  font-size: 16px;
`

const SubmitBtn = styled.div`
  font-size: 16px;
  color: #32b67a;
  cursor: pointer;
`
const CommentsBtnContainer = styled.div`
  display: flex;
  margin-top: 30px;
`

const CommentsBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const CommentsNum = styled.div`
  color: #707070;
`

const CommentsArrow = styled.img`
  width: 10px;
  margin-left: 8px;
`

const CommentProfileContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
`

const CommentContainer = styled.div`
  margin-top: 20px;
`
const Comment = styled.div`
  margin-left: 34px;
  font-size: 16px;
`
const CommentUserName = styled.div`
  margin-left: 10px;
`

const CommentTime = styled(CommentUserName)`
  color: #8d8d8d;
`
