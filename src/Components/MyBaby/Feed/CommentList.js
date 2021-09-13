import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import upArrow from 'Assets/Icon/icon-arrow-up@2x.png'
import downArrow from 'Assets/Icon/icon-arrow-down@2x.png'
import axios from 'axios'
import dateParse from 'Utils/DateParse'

export default function CommentList({ feedId }) {
  const [openCommentList, setOpenCommentList] = useState(false)
  const [commentData, setCommentData] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [editCommentId, setEditCommentId] = useState(0)
  const [editComment, setEditComment] = useState('')

  useEffect(() => {
    axios
      .get(
        `https://58012740-20bb-4b6d-b6ae-dc77d28bb281.mock.pstmn.io/mybaby/${feedId}/comments/`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJqZWN0IjoiMTA0MGJiNGFkOGIzNGI4ZTg0NjI3OGI4ZWZiMjFkYTQ6NSIsImV4cCI6MTYzMDkyNjY5OSwiaWF0IjoxNjMwOTI0ODk5fQ.B-ph_-baWGL5xxE6hSXbP8Fm-aecfg8Q-T0eisOT3Jw',
          },
        }
      )
      .then((res) => setCommentData(res.data.results.data))
  }, [])

  const handleOpenCommentList = () => {
    setOpenCommentList((prev) => !prev)
  }

  const handleEditClick = (id) => {
    setEditMode((prev) => !prev)
    setEditCommentId(id)
  }

  const handleChange = (e) => {
    setEditComment(e.target.value)
  }

  const handleSubmit = () => {
    axios
      .put(
        `https://58012740-20bb-4b6d-b6ae-dc77d28bb281.mock.pstmn.io/mybaby/${feedId}/comments/`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJqZWN0IjoiMTA0MGJiNGFkOGIzNGI4ZTg0NjI3OGI4ZWZiMjFkYTQ6NSIsImV4cCI6MTYzMDkyNjY5OSwiaWF0IjoxNjMwOTI0ODk5fQ.B-ph_-baWGL5xxE6hSXbP8Fm-aecfg8Q-T0eisOT3Jw',
          },
          body: editComment,
        }
      )
      .then((res) => console.log(res))

    console.log('submit!')
    setEditComment('')
    setEditMode((prev) => !prev)
  }

  const handleDelete = () => {
    axios
      .delete(
        `https://58012740-20bb-4b6d-b6ae-dc77d28bb281.mock.pstmn.io/mybaby/${feedId}/comments/`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJqZWN0IjoiMTA0MGJiNGFkOGIzNGI4ZTg0NjI3OGI4ZWZiMjFkYTQ6NSIsImV4cCI6MTYzMDkyNjY5OSwiaWF0IjoxNjMwOTI0ODk5fQ.B-ph_-baWGL5xxE6hSXbP8Fm-aecfg8Q-T0eisOT3Jw',
          },
        }
      )
      .then((res) => console.log(res))

    console.log('delete!')
  }

  return (
    <>
      <CommentsBtnContainer>
        <CommentsBtn onClick={handleOpenCommentList}>
          <CommentsNum>댓글 {commentData.length}</CommentsNum>
          {openCommentList ? (
            <CommentsArrow src={downArrow} />
          ) : (
            <CommentsArrow src={upArrow} />
          )}
        </CommentsBtn>
      </CommentsBtnContainer>
      {openCommentList &&
        commentData.map((comment, index) => (
          <CommentContainer key={index}>
            <CommentProfileContainer>
              <CommentProfileImg src="https://ifh.cc/g/s1AhKt.jpg" />
              <CommentUserName>{comment.id}</CommentUserName>
              <CommentTime>{dateParse(comment.created_at).date}</CommentTime>
              <CommentEdit onClick={() => handleEditClick(comment.id)}>
                수정
              </CommentEdit>
              <CommentDelete onClick={handleDelete}>삭제</CommentDelete>
            </CommentProfileContainer>
            {editMode && comment.id === editCommentId ? (
              <Comment>
                <CommentInputBox
                  type="text"
                  placeholder="댓글쓰기..."
                  onChange={(e) => handleChange(e)}
                  value={editComment}
                />
                <SubmitBtn onClick={handleSubmit}>작성</SubmitBtn>
              </Comment>
            ) : (
              <Comment>{comment.body}</Comment>
            )}
          </CommentContainer>
        ))}
    </>
  )
}
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 24px;
  height: 24px;
`
const CommentProfileImg = styled(ProfileImg)``

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
  display: flex;
  margin-left: 34px;
  font-size: 16px;
`
const CommentUserName = styled.div`
  margin-left: 10px;
`

const CommentEtc = styled(CommentUserName)`
  color: #8d8d8d;
`
const CommentTime = styled(CommentEtc)``

const CommentModify = styled(CommentEtc)`
  cursor: pointer;
`
const CommentEdit = styled(CommentModify)``
const CommentDelete = styled(CommentModify)``

const CommentInputBox = styled.input`
  width: 94%;
  margin-top: 5px;
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
