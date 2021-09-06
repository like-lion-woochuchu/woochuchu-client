import { useState } from 'react'
import submitIcon from 'Assets/Icon/icon-arrow-right-white16px@2x.png'
import styled from 'styled-components/macro'
import Address from './Address'
import Animal from './Animal'
import UserId from './UserId'
import Username from './Username'

const SignUpInput = () => {
  const [userId, setUserId] = useState('')
  const [username, setUsername] = useState('')
  const [address, setAddress] = useState('')
  const [detailAddress, setDetailAddress] = useState('')
  const [animal, setAnimal] = useState(new Set())

  const [userIdError, setUserIdError] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [addressError, setAddressError] = useState('')
  const [detailAddressError, setDetailAddressError] = useState('')
  const [animalError, setAnimalError] = useState('')

  const resetErrors = () => {
    setUserIdError('')
    setUsernameError('')
    setAddressError('')
    setDetailAddressError('')
    setAnimalError('')
  }

  const validate = () => {
    resetErrors()
    let validated = true
    if (!userId) {
      setUserIdError('ID를 입력해 주세요.')
      validated = false
    }
    if (userId.length > 20) {
      setUserIdError('20자 이하의 ID를 입력해 주세요.')
      validated = false
    }
    if (!username) {
      setUsernameError('이름을 입력해 주세요.')
      validated = false
    }
    if (username.length > 20) {
      setUsernameError('20자 이하의 이름을 입력해 주세요.')
      validated = false
    }
    if (!address) {
      setAddressError('주소를 입력해 주세요.')
      validated = false
    }
    if (animal.size <= 0) {
      setAnimalError('관심 동물을 하나 이상 선택해 주세요.')
      validated = false
    }

    return validated
  }
  return (
    <SignUpInputArea>
      <UserId userId={userId} setUserId={setUserId} error={userIdError} />
      <Username
        username={username}
        setUsername={setUsername}
        error={usernameError}
      />
      <Address
        address={address}
        detailAddress={detailAddress}
        setAddress={setAddress}
        setDetailAddress={setDetailAddress}
        error={addressError}
      />
      <Animal animal={animal} setAnimal={setAnimal} error={animalError} />

      <SubmitButton onClick={validate}>
        가입하기
        <SubmitIcon></SubmitIcon>
      </SubmitButton>
    </SignUpInputArea>
  )
}

const SignUpInputArea = styled.div`
  margin-top: 40px;
  margin-left: 30px;
  width: 640px;
  height: 950px;
`

const SubmitButton = styled.div`
  margin: 50px 30px 20px 450px;
  padding: 32px 40px 32px 40px;
  width: 180px;
  height: 90px;
  background: #1d1e20 0% 0% no-repeat padding-box;
  border-radius: 45px;
  text-align: center;
  font: normal normal bold 18px/26px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`

const SubmitIcon = styled.img.attrs({
  src: submitIcon,
})`
  padding-top: 2px;
  margin-left: 12px;
  width: 9px;
  height: 16px;
`

export default SignUpInput
