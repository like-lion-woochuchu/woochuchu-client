import React, { useEffect, useState } from 'react'
import axios from 'axios'

import styled from 'styled-components/macro'
import PostHeader from 'Components/MyBaby/Feed/PostHeader'
import PostImage from 'Components/MyBaby/Feed/PostImage'
import PostReactionButton from './PostReactionButton'
import PostBody from './PostBody'
import PostComment from './PostComment'

export default function Post() {
  const [postData, setPostData] = useState([])
  useEffect(() => {
    console.log(new Date())
    axios
      .get(
        'https://58012740-20bb-4b6d-b6ae-dc77d28bb281.mock.pstmn.io/mybaby/',
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
          <PostComment feedId={data.id} />
        </Wrapper>
      ))}
    </>
  )
}
const Wrapper = styled.div`
  background-color: #fff;
  /* max-width: 700px; */
  margin: 30px;
  padding: 30px 15px;
  border: solid 0.2px #707070;
  border-radius: 10px;
`
