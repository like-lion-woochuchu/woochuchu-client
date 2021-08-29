import { useState } from 'react'
import styled from 'styled-components/macro'
import { SubjectText, SignUpInput } from './SignUpLayout'

const Username = (props) => {
  return (
    <>
      <UsernameDiv>
        <SubjectText>이름</SubjectText>
        <SignUpInput
          value={props.username}
          placeholder={'우쭈쭈'}
          onChange={(e) => props.setUsername(e.target.value)}
        />
      </UsernameDiv>
    </>
  )
}

const UsernameDiv = styled.div`
  margin-top: 260px;
  margin-right: 20px;
  padding: 32px 50px;
  width: 310px;
  height: 90px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  opacity: ;
`

export default Username