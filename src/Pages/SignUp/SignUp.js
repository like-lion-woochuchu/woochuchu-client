import React from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import {
  SignupDiv,
  SignUpFrame,
  SignUpIcon,
  SignUpText,
} from 'Components/SignUp/SignUpLayout'
import SignUpInput from 'Components/SignUp/SignUpInput'

const SignUp = () => {
  return (
    <Layout>
      <SignupDiv>
        <SignUpIcon />
        <SignUpText>회원가입</SignUpText>
        <SignUpFrame>
          <SignUpInput />
        </SignUpFrame>
      </SignupDiv>
    </Layout>
  )
}

export default SignUp
