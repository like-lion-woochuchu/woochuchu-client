import React from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import loginFormLogo from 'Assets/Images/Logo/main-logo144px@2x.png'
import GoogleSignIn from 'Components/Login/GoogleSignIn'
import KakaoSignIn from 'Components/Login/KakaoSignIn'

const Login = () => {
  return (
    <Layout>
      <LoginForm>
        <LoginLogo></LoginLogo>
        <GoogleSignIn></GoogleSignIn>
        <KakaoSignIn></KakaoSignIn>
      </LoginForm>
    </Layout>
  )
}

const LoginForm = styled.div`
  margin-top: 43px;
  margin-bottom: 47px;
  left: 610px;
  width: 700px;
  height: 674px;
  background: transparent url('https://ifh.cc/g/vghVIH.png') 0% 0% no-repeat
    padding-box;
  border-radius: 30px;
  opacity: 1;
`

const LoginLogo = styled.img.attrs({
  src: loginFormLogo,
})`
  margin-top: 60px;
  margin-left: 278px;
  width: 144px;
  height: 144px;
  opacity: 1;
`

export default Login
