import React, { useEffect, useState } from 'react'
import axios from 'axios'

import styled from 'styled-components/macro'
import PostImage from 'Components/Post/PostImage'
import PostReactionButton from 'Components/Post/PostReactionButton'
import PostBody from 'Components/Post/PostBody'
import CommentInput from 'Components/Post/CommentInput'
import CommentList from 'Components/Post/CommentList'
import FindPostHeader from 'Components/FindMyBaby/Feed/FindPostHeader'

export default function Feed({ type }) {
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
          <FindPostHeader date={data.updated_at} />
          <PostContainer>
            <PostTitle>{data.title}</PostTitle>
            <PostImage imgUrl={data.img_url} />
            <PostReactionButton
              type={type}
              numOfComments={data.comments_count}
            />
            <PostBody body={data.body} />
            <CommentInput feedId={data.id} type={type} />
            <CommentList
              comments={data.comments}
              feedId={data.id}
              type={type}
            />
          </PostContainer>
        </Wrapper>
      ))}
    </>
  )
}
const Wrapper = styled.div`
  background-color: #fff;
  min-width: 700px;
  margin: 30px 0;
  border: solid 0.2px #707070;
  border-radius: 10px;
`

const PostContainer = styled.div`
  padding: 0px 15px 30px;
`

const PostTitle = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`
