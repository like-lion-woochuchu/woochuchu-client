import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import Layout from 'Layout/Layout'
import PageTitles from 'Components/PageTitles/PageTitles'
import insertPhotoImg from 'Assets/Icon/icons_insert-picture.png'
import AnimalData from 'Data/animal.json'
import InputBox from 'Components/Family/Feed/InputBox'
import SelectBox from 'Components/Family/Feed/SelectBox'
import Address from 'Components/FamilyWrite/Address'
import AnimalSelectBtn from 'Components/MyBaby/AnimalSelectBtn/AnimalSelectBtn'
import Button from 'Components/Common/Button'
import { useHistory } from 'react-router-dom'

axios.defaults.withCredentials = true

export default function FamilyWrite() {
  const history = useHistory()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [detailAddress, setDetailAddress] = useState('')
  const [address, setAddress] = useState('')
  const [postData, setPostData] = useState({
    breed: '',
    sex: 100,
    age: 0,
    description: '',
    img_url: [],
    // phone: '',
    // address_name: '',
    // address_detail: '',
    animal: 0,
  })

  const [selectedAnimal, setSelectedAnimal] = useState('')
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    setPostData((prev) => ({
      ...prev,
      animal: AnimalData.animalData[selectedAnimal],
    }))
  }, [selectedAnimal])

  useEffect(() => {
    if (
      postData.breed.length > 0 &&
      postData.sex !== 100 &&
      postData.age > 0 &&
      postData.description.length > 0 &&
      // postData.img_url.length &&
      phoneNumber.phone.length > 0 &&
      address.length > 0 &&
      detailAddress.length > 0 &&
      postData.animal
    )
      setDisabled(false)
  }, [postData, phoneNumber, address, detailAddress])

  const handleContentChange = (e) => {
    setPostData((prev) => ({
      ...prev,
      body: e.target.value,
    }))
  }

  const handleGenderChange = (e) => {
    let genderNum
    if (e.target.value === '여') {
      genderNum = 1
    } else {
      genderNum = 0
    }

    setPostData((prev) => ({
      ...prev,
      [e.target.name]: genderNum,
    }))
  }

  const handleSubmitClick = (e) => {
    e.preventDefault()
    axios
      .post(`${process.env.REACT_APP_API_URL}/bemybaby/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJqZWN0IjoiMTA0MGJiNGFkOGIzNGI4ZTg0NjI3OGI4ZWZiMjFkYTQ6NSIsInVzZXJuYW1lIjoib25pb24iLCJwcm9maWxlX2ltZyI6bnVsbCwiZXhwIjoxNjM4NTkzNTU4LCJpYXQiOjE2MzczODM5NTh9.sS6PVNgndbegrcuJKlj1slcujk1VT6rqPPtLpO94pOE',
        },
        body: postData,
        age: parseInt(postData.age),
        ...(phoneNumber ? { phone: phoneNumber } : {}),
        ...(detailAddress ? { address_detail: detailAddress } : {}),
        address_name: address,
      })
      .then((res) => {
        console.log(res)
        history.push('/family')
      })
      .catch((err) => console.error(err))
      .finally(console.log('프로세스 끝'))
  }

  return (
    <Layout>
      <div>
        <PageTitles title="가족이 되어주세요" />
        <Container>
          <AnimalImgBox>
            <AnimalImg src={insertPhotoImg} alt="" />
          </AnimalImgBox>
          <InfoContainer>
            <FirstInfoBox>
              <InputBox
                title="종"
                placeHolder="종을 입력해주세요."
                name="breed"
                setInput={setPostData}
              />
            </FirstInfoBox>
            <InfoBox>
              <SelectBox
                title="성별"
                listArr={['남', '여']}
                name="sex"
                handleChange={(e) => handleGenderChange(e)}
                width="50%"
              />
            </InfoBox>
          </InfoContainer>
          <InfoContainer>
            <InputBox
              type="number"
              title="나이"
              placeHolder="5"
              name="age"
              setInput={setPostData}
              width="82%"
            />
            <InputBox
              type="string"
              title="보호자 연락처"
              placeHolder="010-0000-0000"
              name="phone"
              width="65%"
              setInput={setPhoneNumber}
            />
          </InfoContainer>
          <InputBox
            title="특징"
            placeHolder="ex) 귀에 붉은 점이 있어요."
            name="description"
            setInput={setPostData}
          />
          <Address
            address={address}
            detailAddress={detailAddress}
            setAddress={setAddress}
            setDetailAddress={setDetailAddress}
          />
          <AnimalSelectTitle>동물 종류</AnimalSelectTitle>
          <AnimalSelectContainer>
            <AnimalSelectBtn
              selectedAnimal={selectedAnimal}
              setSelectedAnimal={setSelectedAnimal}
              multiselect={false}
            />
          </AnimalSelectContainer>
          <SubmitButtonBox>
            <Button
              disabled={disabled}
              text="글쓰기"
              handleClick={handleSubmitClick}
            />
          </SubmitButtonBox>
        </Container>
      </div>
    </Layout>
  )
}

const Container = styled.div`
  margin-bottom: 150px;
  background-color: #fff;
  padding: 20px 15px;
  max-width: 700px;
  border: 0.3px solid #dedede;
  border-radius: 30px;
`

const ContentBox = styled.div`
  min-height: 400px;
  margin-bottom: 15px;
  padding: 32px 40px;
  width: 100%;
  height: 40%;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  opacity: 1;
`

const ContentArea = styled.textarea`
  width: 580px;
  min-height: 400px;
  outline: none;
  background: none;
  border: none;
  margin: ${(props) => props.margin || '0px'};
  text-align: left;
  font: normal normal 300 18px/26px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  ::placeholder {
    font: normal normal 300 18px/26px Noto Sans CJK KR;
    letter-spacing: 0px;
    color: #dedede;
  }
  ::-webkit-scrollbar {
    width: 5.2px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
`
const AnimalImgBox = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  min-height: 120px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  opacity: 1;
`
const AnimalImg = styled.img`
  width: 25%;
  height: 25%;
`

const SubmitButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const FirstInfoBox = styled.div`
  width: 55%;
`

const InfoBox = styled.div`
  margin-left: 10px;
  width: 55%;
`
const AnimalSelectContainer = styled.div`
  margin-bottom: 15px;
`
const AnimalSelectTitle = styled.div`
  margin: 15px 0;
  font: normal normal bold 18px/26px Noto Sans CJK KR;
  color: #1d1e20;
`
