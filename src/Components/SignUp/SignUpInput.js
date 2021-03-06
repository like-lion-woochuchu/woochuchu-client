import { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import submitIcon from 'Assets/Icon/icon-arrow-right-white16px@2x.png'
import styled from 'styled-components/macro'
import Address from './Address'
import Animal from './Animal'
import UserId from './UserId'
import Username from './Username'
import axios from 'axios'

const SignUpInput = () => {
  const history = useHistory()
  const location = useLocation()
  const state = location.state
  const [userId, setUserId] = useState('')
  const [username, setUsername] = useState('')
  const [address, setAddress] = useState('')
  const [detailAddress, setDetailAddress] = useState('')
  const [animal, setAnimal] = useState(new Set())

  const [userIdError, setUserIdError] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [addressError, setAddressError] = useState('')
  const [animalError, setAnimalError] = useState('')

  const resetErrors = () => {
    setUserIdError('')
    setUsernameError('')
    setAddressError('')
    setAnimalError('')
  }

  const validate = () => {
    resetErrors()
    let validated = true
    const idPattern = /^[a-zA-Z0-9_.]+$/
    if (userId.length < 2 || userId.length > 20) {
      setUserIdError('2~20자 사이의 ID를 입력해 주세요.')
      validated = false
    } else if (!idPattern.test(userId)) {
      setUserIdError('영문자, 숫자, ., _ 로 이루어진 ID를 입력해 주세요.')
      validated = false
    }
    const namePattern = /^[a-zA-Z가-힣]+$/
    if (username.length > 20 || username.length < 2) {
      setUsernameError('2~20자 이내의 이름을 입력해 주세요.')
      validated = false
    } else if (!namePattern.test(username)) {
      setUsernameError('영문자, 한글로 이루어진 이름을 입력해 주세요.')
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

  const onSubmit = () => {
    if (validate()) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/accounts/auth/signup/`, {
          user: {
            email: state.email,
            provider: state.provider,
            nickname: userId,
            username: username,
            profile_img: state.profile_image,
          },
          address: {
            address_name: address,
            address_name_detail: detailAddress,
          },
          animals: Array.from(animal),
        })
        .then((response) => {
          if (response.status === 200) {
            alert('회원가입이 완료되었습니다.')
            axios
              .post(
                `${process.env.REACT_APP_API_URL}/accounts/auth/signin/`,
                {
                  email: state.email,
                  provider: state.provider,
                },
                {
                  headers: {
                    'Content-type': 'application/json',
                    Accept: 'application/json',
                  },
                }
              )
              .then((response) => {
                if (response.status === 200) {
                  console.log(response.data)
                  console.log(response.data.results.access_token)
                  const token = response.data.results.access_token
                  localStorage.setItem('token', token)
                  console.log(localStorage.getItem('token'))
                  history.push('/')
                }
              })
              .catch((error) => {
                alert('오류가 발생했습니다. 회원가입을 다시 진행해 주세요.')
                console.log(error)
              })
          }
        })
        .catch((response) => {
          console.log(response)
        })
    }
  }
  return (
    <SignUpInputArea>
      <Username
        username={username}
        setUsername={setUsername}
        error={usernameError}
      />
      <UserId userId={userId} setUserId={setUserId} error={userIdError} />

      <Address
        address={address}
        detailAddress={detailAddress}
        setAddress={setAddress}
        setDetailAddress={setDetailAddress}
        error={addressError}
      />
      <Animal animal={animal} setAnimal={setAnimal} error={animalError} />

      <SubmitButton onClick={onSubmit}>
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
  font: normal normal bold 18px/26px Noto Sans KR;
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
