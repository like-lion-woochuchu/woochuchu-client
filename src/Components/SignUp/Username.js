import { useState } from 'react'
import styled from 'styled-components/macro'
import { SubjectText, SignUpInput, ErrorMessage } from './SignUpLayout'

const Username = (props) => {
  return (
    <>
      <UsernameDiv error={props.error}>
        <SubjectText>이름</SubjectText>
        <SignUpInput
          value={props.username}
          placeholder={'우쭈쭈'}
          onChange={(e) => props.setUsername(e.target.value)}
        />
        {props.error ? <ErrorMessage>{props.error}</ErrorMessage> : null}
      </UsernameDiv>
    </>
  )
}

const UsernameDiv = styled.div`
  margin-bottom: 20px;
  padding: 32px 50px;
  width: 430px;
  height: 90px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  opacity: ;
`

export default Username
