import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import PostImage from 'Components/Post/PostImage'
import PostReactionButton from 'Components/Post/PostReactionButton'
import FindPostHeader from 'Components/FindMyBaby/Feed/FindPostHeader'
import dateParse from 'Utils/DateParse'
import CommentInput from 'Components/Post/CommentInput'
import CommentList from 'Components/Post/CommentList'
import Map from 'Components/Common/Map'

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
          {active === '아이 정보' ? (
            <TabContent>
              <InfoContainer>
                <InfoBox>
                  <InfoTitle>아이 이름 (종)</InfoTitle>
                  <InfoContent>
                    {postData.name} ({postData.breed})
                  </InfoContent>
                </InfoBox>
                <InfoBox>
                  <InfoTitle>나이</InfoTitle>
                  <InfoContent>{postData.age} 세</InfoContent>
                </InfoBox>
                <InfoBox>
                  <InfoTitle>성별</InfoTitle>
                  <InfoContent>
                    {postData.sex === 0 ? '수컷' : '암컷'}
                  </InfoContent>
                </InfoBox>
                <InfoBox>
                  <InfoTitle>보호자 연락처</InfoTitle>
                  <InfoContent>
                    {postData.phone && postData.phone.slice(0, 3)}-
                    {postData.phone && postData.phone.slice(3, 7)}-
                    {postData.phone && postData.phone.slice(7)}
                  </InfoContent>
                </InfoBox>
                <InfoBox>
                  <InfoTitle>마지막 발견 일시</InfoTitle>
                  <InfoContent>
                    {postData.last_seen && dateParse(postData.last_seen).date}
                    &ensp;
                    {postData.last_seen && dateParse(postData.last_seen).time}
                  </InfoContent>
                </InfoBox>
              </InfoContainer>
            </TabContent>
          ) : (
            postData.address && (
              <TabContent>
                <div>
                  <Map
                    cordX={postData.address.address_coord_x}
                    cordY={postData.address.address_coord_y}
                    width="630px"
                    margin="0 0 20px"
                  />
                  <InfoContainer>
                    <InfoBox>
                      <InfoTitle>마지막 목격 위치</InfoTitle>
                      <InfoContent>
                        {postData.address.address_name &&
                          postData.address.address_name}
                      </InfoContent>
                    </InfoBox>
                  </InfoContainer>
                </div>
              </TabContent>
            )
          )}
          <CommentInput postId={postData.id} type="findmybaby" />
          {postData.comments && (
            <CommentList
              comments={postData.comments}
              feedId={postData.id}
              type="findmybaby"
            />
          )}
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
    color: #32b67a;
    border-bottom: 2px solid #32b67a;
    opacity: 1;
  `}
`
const TabBox = styled.div`
  display: flex;
`
const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`
const TabContent = styled.div`
  display: flex;
  justify-content: center;
`
const InfoContainer = styled.div`
  border-radius: 20px;
  background-color: #fafafa;
  min-width: 630px;
  padding: 12px 20px;
`
const InfoBox = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin: 10px 0;
`
const InfoTitle = styled.div`
  color: #32b67a;
  font-weight: 700;
`
const InfoContent = styled.div``
