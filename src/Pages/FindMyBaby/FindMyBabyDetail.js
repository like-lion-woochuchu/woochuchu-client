import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import PostImage from 'Components/Post/PostImage'
import PostReactionButton from 'Components/Post/PostReactionButton'
import FindPostHeader from 'Components/FindMyBaby/Feed/FindPostHeader'

export default function FindMyBabyDetail() {
  const { seq } = useParams()

  const [postData, setPostData] = useState([])
  const types = ['아이 정보', '마지막 목격 위치']
  const [active, setActive] = useState(types[0])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/findmybaby/${seq}/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJqZWN0IjoiMTA0MGJiNGFkOGIzNGI4ZTg0NjI3OGI4ZWZiMjFkYTQ6NSIsInVzZXJuYW1lIjoib25pb24iLCJwcm9maWxlX2ltZyI6bnVsbCwiZXhwIjoxNjM4NTkzNTU4LCJpYXQiOjE2MzczODM5NTh9.sS6PVNgndbegrcuJKlj1slcujk1VT6rqPPtLpO94pOE',
        },
      })
      .then((res) => setPostData(res.data.results.data))
  }, [])
  console.log(postData)

  return (
    <Layout>
      <Wrapper>
        {postData.updated_at && (
          <FindPostHeader
            date={postData.updated_at}
            findState={postData.find_flag}
          />
        )}
        <PostContainer>
          <Profile>
            <ProfileImg src="https://ifh.cc/g/s1AhKt.jpg" />
            <UserName>{postData.user}</UserName>
          </Profile>
          <PostTitle>{postData.title}</PostTitle>
          <PostImage imgUrl={postData.img_url} />
          {postData.comments && (
            <PostReactionButton
              type="findmybaby"
              numOfComments={postData.comments.length}
            />
          )}
          <TextContainer>{postData.body}</TextContainer>
          <TabContainer>
            <TabBox>
              {types.map((type) => (
                <Tab
                  key={type}
                  active={active === type}
                  onClick={() => setActive(type)}
                >
                  {type}
                </Tab>
              ))}
            </TabBox>
          </TabContainer>
          {active === '아이 정보' ? <A>정보</A> : <A>지도</A>}
        </PostContainer>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  background-color: #fff;
  width: 700px;
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
const TextContainer = styled.div`
  word-break: break-all;
  font-size: 18px;
  text-align: left;
  color: #000;
  width: 700px;
  margin-top: 20px;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`
const UserName = styled.div`
  color: #1d1e20;
`
const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`
const TabBox = styled.div`
  display: flex;
`
const TabContainer = styled.div`
  display: flex;
  justify-content: center;
`
const A = styled.div`
  display: flex;
  justify-content: center;
`
