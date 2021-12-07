import React, { useEffect, useState } from 'react'
import axios from 'axios'

import styled from 'styled-components/macro'
import PostHeader from 'Components/Post/PostHeader'
import PostImage from 'Components/Post/PostImage'
import PostReactionButton from './PostReactionButton'
import PostBody from './PostBody'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default function Post({ type }) {
  const [postData, setPostData] = useState([])
  useEffect(() => {
    console.log(new Date())
    axios
      .get(`${process.env.REACT_APP_API_URL}/${type}/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJqZWN0IjoiMTA0MGJiNGFkOGIzNGI4ZTg0NjI3OGI4ZWZiMjFkYTQ6NSIsInVzZXJuYW1lIjoib25pb24iLCJwcm9maWxlX2ltZyI6bnVsbCwiZXhwIjoxNjM4NTkzNTU4LCJpYXQiOjE2MzczODM5NTh9.sS6PVNgndbegrcuJKlj1slcujk1VT6rqPPtLpO94pOE',
        },
      })
      .then((res) => setPostData(res.data.results.data))
  }, [])
  return (
    <>
      {postData.map((data, index) => (
        <Wrapper key={index}>
          <PostHeader name={data.user} date={data.created_at} />
          <PostImage imgUrl={data.img_url} />
          <PostReactionButton />
          <PostBody body={data.body} />
          <CommentInput postId={data.id} type={type} />
          <CommentList postId={data.id} type={type} />
        </Wrapper>
      ))}
    </>
  )
}
const Wrapper = styled.div`
  background-color: #fff;
  min-width: 700px;
  margin: 30px;
  padding: 30px 15px;
  border: solid 0.2px #707070;
  border-radius: 10px;
`
