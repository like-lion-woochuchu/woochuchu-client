import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import logoImgUrl from 'Assets/Images/Logo/nav-main-logo80px@2x.png'
import jwtDecode from 'jwt-decode'

export default function Header() {
  const history = useHistory()
  const [token, setToken] = useState()
  const checkLogin = () => {
    if (localStorage.getItem('token')) {
      const decoded = jwtDecode(localStorage.getItem('token'))
      setToken(decoded)
      console.log(decoded)
      console.log(decoded.subject)
    }
  }
  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <Wrapper>
      <Container>
        <LeftNav>
          <Logo src={logoImgUrl} alt="logo" />
          <Menus
            onClick={() => {
              history.push('/mybaby')
            }}
          >
            내 새끼 자랑하기
          </Menus>
          <Menus
            onClick={() => {
              history.push('/findmybaby')
            }}
          >
            찾아주세요
          </Menus>
          <Menus
            onClick={() => {
              history.push('/bemybaby')
            }}
          >
            가족이 되어주세요
          </Menus>
          <Menus
            onClick={() => {
              history.push('/message-list')
            }}
          >
            쪽지함
          </Menus>
        </LeftNav>
        <RightNav>
          {token ? (
            <Profile>
              <ProfileImg
                src={token.profile_img ? token.profile_img : logoImgUrl}
                alt="logo"
              />
              {token.nickname} 님
            </Profile>
          ) : (
            <Menus onClick={() => history.push('/login')}>로그인</Menus>
          )}

          <Logout
            onClick={() => {
              if (localStorage.getItem('token')) {
                localStorage.clear()
                setToken()
                alert('로그아웃 되었습니다.')
              } else {
                alert('로그인 상태가 아닙니다.')
              }
            }}
          >
            로그아웃
          </Logout>
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
  cursor: pointer;
`
const Logout = styled(Menus)`
  color: #707070;
`

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 35px;
  cursor: pointer;
`
const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border-radius: 50%;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
`
