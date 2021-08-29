import { useState } from 'react'
import styled from 'styled-components/macro'
import Address from './Address'
import Username from './Username'

const SignUpInput = () => {
  const [username, setUsername] = useState('')
  const [address, setAddress] = useState('')
  const [detailAddress, setDetailAddress] = useState('')
  return (
    <SignUpInputArea>
      <UsernameAgeArea>
        <Username username={username} setUsername={setUsername} />
      </UsernameAgeArea>
      <Address
        address={address}
        detailAddress={detailAddress}
        setAddress={setAddress}
        setDetailAddress={setDetailAddress}
      />
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
