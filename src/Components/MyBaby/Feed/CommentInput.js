import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styled from 'styled-components/macro'

export default function CommentInput({ feedId }) {
  const [comment, setComment] = useState('')
  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = () => {
    axios
      .post(
        `https://58012740-20bb-4b6d-b6ae-dc77d28bb281.mock.pstmn.io/mybaby/${feedId}/comments/`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJqZWN0IjoiMTA0MGJiNGFkOGIzNGI4ZTg0NjI3OGI4ZWZiMjFkYTQ6NSIsImV4cCI6MTYzMDkyNjY5OSwiaWF0IjoxNjMwOTI0ODk5fQ.B-ph_-baWGL5xxE6hSXbP8Fm-aecfg8Q-T0eisOT3Jw',
          },
          body: comment,
        }
      )
      .then((res) => console.log(res))

    console.log('submit!')
    setComment('')
  }

  return (
    <>
      <Wrapper>
        <MyProfileImg src="https://ifh.cc/g/s1AhKt.jpg" />
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
