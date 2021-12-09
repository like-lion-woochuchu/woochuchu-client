import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styled from 'styled-components/macro'
import jwtDecode from 'jwt-decode'
import getDataFromLocalStorage from 'Utils/Storage/GetDataFromLocalStorage'
import logoImgUrl from 'Assets/Images/Logo/nav-main-logo80px@2x.png'

export default function CommentInput({ postId, type, setFetchTrigger }) {
  const [comment, setComment] = useState('')
  const [decodedToken, setDecodedToken] = useState()
  const token = getDataFromLocalStorage('token')

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token)
      setDecodedToken(decoded)
    }
  }, [token])

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = async () => {
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/${type}/${postId}/comments/`,
        { body: comment },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => setFetchTrigger((prev) => prev + 1))
      .catch((err) => console.log(err))

    setComment('')
  }

  return (
    <>
      <Wrapper>
        {decodedToken ? (
          <MyProfileImg src={decodedToken.profile_img} />
        ) : (
          <MyProfileImg src={logoImgUrl} />
        )}
        <CommentInputBox
          type="text"
          placeholder="댓글쓰기..."
          onChange={(e) => handleChange(e)}
          value={comment}
        />
        <SubmitBtn onClick={handleSubmit}>작성</SubmitBtn>
      </Wrapper>
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

const CommentInputBox = styled.input`
  width: 89%;
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
