import React from 'react'
import styled from 'styled-components/macro'
import logoImgUrl from 'Assets/Images/logo.png'

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <LeftNav>
          <Logo src={logoImgUrl} alt="logo" />
          <Menus>내 새끼 자랑하기</Menus>
          <Menus>찾아주세요</Menus>
          <Menus>가족이 되어주세요</Menus>
        </LeftNav>
        <RightNav>
          <Profile>
            <ProfileImg src={logoImgUrl} alt="logo" />
            민유지님
          </Profile>
          <Menus>로그아웃</Menus>
        </RightNav>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 160px;
  border-bottom: solid 0.3px #dedede;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  width: 1000px;
`

const LeftNav = styled.div`
  display: flex;
  align-items: center;
`
const RightNav = styled.div`
  display: flex;
  align-items: center;
`

const Menus = styled.li`
  display: flex;
  align-items: center;
  margin-left: 50px;
`

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 35px;
`
const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
`
