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
      .get(
        `https://58012740-20bb-4b6d-b6ae-dc77d28bb281.mock.pstmn.io/${type}/`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJqZWN0IjoiMTA0MGJiNGFkOGIzNGI4ZTg0NjI3OGI4ZWZiMjFkYTQ6NSIsImV4cCI6MTYzMDkyNjY5OSwiaWF0IjoxNjMwOTI0ODk5fQ.B-ph_-baWGL5xxE6hSXbP8Fm-aecfg8Q-T0eisOT3Jw',
          },
        }
      )
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
          <CommentInput feedId={data.id} type={type} />
          <CommentList feedId={data.id} type={type} />
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
