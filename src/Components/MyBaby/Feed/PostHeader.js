import React from 'react'
import styled from 'styled-components/macro'
import logoImgUrl from 'Assets/Images/Logo/nav-main-logo80px.png'

export default function Post({ name, date }) {
  return (
    <Wrapper>
      <Profile>
        <ProfileImg src="https://ifh.cc/g/s1AhKt.jpg" />
        <UserName>{name}</UserName>
      </Profile>
      <PostedDate>{date}</PostedDate>
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
