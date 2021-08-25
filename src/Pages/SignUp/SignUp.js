import React from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import {
  SignupDiv,
  SignUpFrame,
  SignUpIcon,
  SignUpInputArea,
  SignUpText,
} from 'Components/SignUp/SignUpLayout'

const SignUp = () => {
  return (
    <Layout>
      <SignupDiv>
        <SignUpIcon></SignUpIcon>
        <SignUpText>회원가입</SignUpText>
        <SignUpFrame>
          <SignUpInputArea></SignUpInputArea>
        </SignUpFrame>
      </SignupDiv>
    </Layout>
  )
}

export default SignUp
