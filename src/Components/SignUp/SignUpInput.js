import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components/macro'
import Address from './Address'
import Age from './Age'
import Username from './Username'

const SignUpInput = () => {
  return (
    <SignUpInputArea>
      <UsernameAgeArea>
        <Username />
        <Age />
      </UsernameAgeArea>
      <Address />
    </SignUpInputArea>
  )
}

const SignUpInputArea = styled.div`
  margin-top: 40px;
  margin-left: 30px;
  width: 640px;
  height: 742px;
`
const UsernameAgeArea = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: row;
`

export default SignUpInput
