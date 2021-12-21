import React, { useState } from 'react'
import styled from 'styled-components/macro'
import upArrow from 'Assets/Icon/icon-arrow-up@2x.png'
import downArrow from 'Assets/Icon/icon-arrow-down@2x.png'
import Comments from 'Components/Post/Comments'

export default function CommentList({
  comments,
  type,
  setCommentList,
  postId,
  setFetchTrigger,
}) {
  const [openCommentList, setOpenCommentList] = useState(false)

  const handleOpenCommentList = () => {
    setOpenCommentList((prev) => !prev)
  }

  return (
    <>
      <CommentsBtnContainer>
        <CommentsBtn onClick={handleOpenCommentList}>
          {comments && <CommentsNum>댓글 {comments.length}</CommentsNum>}
          {openCommentList ? (
            <CommentsArrow src={downArrow} />
          ) : (
            <CommentsArrow src={upArrow} />
          )}
        </CommentsBtn>
      </CommentsBtnContainer>
      {openCommentList &&
        comments.map((comment, index) => (
          <Comments
            key={index}
            comment={comment}
            type={type}
            setCommentList={setCommentList}
            postId={postId}
            setFetchTrigger={setFetchTrigger}
          />
        ))}
    </>
  )
}
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
