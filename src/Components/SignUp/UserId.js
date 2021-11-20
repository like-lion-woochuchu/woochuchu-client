import styled from 'styled-components/macro'
import { SubjectText, SignUpInput, ErrorMessage } from './SignUpLayout'

const UserId = (props) => {
  return (
    <>
      <UserIdDiv error={props.error}>
        <SubjectText margin={'30px'}>닉네임</SubjectText>
        <SignUpInput
          value={props.userId}
          placeholder={'woochuchu'}
          onChange={(e) => props.setUserId(e.target.value)}
        />
        {props.error ? <ErrorMessage>{props.error}</ErrorMessage> : null}
      </UserIdDiv>
    </>
  )
}

const UserIdDiv = styled.div`
  margin-bottom: 20px;
  padding: 32px 50px;
  width: 430px;
  height: 90px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  opacity: ;
`

export default UserId
