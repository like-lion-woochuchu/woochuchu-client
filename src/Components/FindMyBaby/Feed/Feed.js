import React, { useEffect, useState } from 'react'
import axios from 'axios'

import styled from 'styled-components/macro'
import PostImage from 'Components/Post/PostImage'
import PostReactionButton from 'Components/Post/PostReactionButton'
import PostBody from 'Components/Post/PostBody'
import FindPostHeader from 'Components/FindMyBaby/Feed/FindPostHeader'

export default function Feed({ type }) {
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
          <FindPostHeader date={data.updated_at} findState={data.find_flag} />
          <PostContainer>
            <PostTitle>{data.title}</PostTitle>
            <PostImage imgUrl={data.img_url} />
            <PostReactionButton
              type={type}
              numOfComments={data.comments.length}
            />
            <PostBody postId={data.id} body={data.body} type={type} />
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
