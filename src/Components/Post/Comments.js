import React, { useState } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import dateParse from 'Utils/DateParse'
import getDataFromLocalStorage from 'Utils/Storage/GetDataFromLocalStorage'

export default function Comments({
  comment,
  type,
  setCommentList,
  postId,
  setFetchTrigger,
}) {
  const [editMode, setEditMode] = useState(false)
  const [editCommentId, setEditCommentId] = useState(0)
  const [editComment, setEditComment] = useState('')
  const token = getDataFromLocalStorage('token')

  const handleEditClick = (id) => {
    setEditMode((prev) => !prev)
    setEditCommentId(id)
  }

  const handleChange = (e) => {
    setEditComment(e.target.value)
  }

  const handleSubmit = (editCommentId) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/${type}/comment/${editCommentId}/`,
        { body: editComment },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() =>
        axios.get(
          `${process.env.REACT_APP_API_URL}/${type}/${postId}/comments/`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        )
      )
      .then((res) => {
        setCommentList(res.data.results.data)
      })
      .catch((err) => console.log(err))
    setEditComment('')
    setEditMode((prev) => !prev)
  }

  const handleDelete = (deleteCommentId) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/${type}/comment/${deleteCommentId}/`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() =>
        axios.get(
          `${process.env.REACT_APP_API_URL}/${type}/${postId}/comments/`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        )
      )
      .then((res) => {
        setCommentList(res.data.results.data)
        setFetchTrigger((prev) => prev + 1)
      })

      .catch((err) => console.log(err))

    console.log('delete!')
  }

  return (
    <CommentContainer>
      <CommentProfileContainer>
        <CommentProfileImg src={comment.user.profile_img} />
        <CommentUserName>{comment.user.nickname}</CommentUserName>
        <CommentTime>{dateParse(comment.created_at).date}</CommentTime>
        <CommentEdit onClick={() => handleEditClick(comment.id)}>
          {editMode ? '??????' : '??????'}
        </CommentEdit>
        <CommentDelete onClick={() => handleDelete(comment.id)}>
          ??????
        </CommentDelete>
      </CommentProfileContainer>
      {editMode && comment.id === editCommentId ? (
        <Comment>
          <CommentInputBox
            type="text"
            placeholder="????????????..."
            onChange={(e) => handleChange(e)}
            value={editComment}
          />
          <SubmitBtn onClick={() => handleSubmit(editCommentId)}>
            ??????
          </SubmitBtn>
        </Comment>
      ) : (
        <Comment>{comment.body}</Comment>
      )}
    </CommentContainer>
  )
}
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 24px;
  height: 24px;
`
const CommentProfileImg = styled(ProfileImg)``

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
