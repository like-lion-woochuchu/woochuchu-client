import React from 'react'
import styled from 'styled-components/macro'
import dateParse from 'Utils/DateParse'

export default function PostHeader({ name, date }) {
  return (
    <Wrapper>
      <Profile>
        <ProfileImg src="https://ifh.cc/g/s1AhKt.jpg" />
        <UserName>{name}</UserName>
      </Profile>
      <PostedDate>
        {dateParse(date).date}
        {dateParse(date).time}
      </PostedDate>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
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

const PostedDate = styled.div`
  color: #707070;
`
