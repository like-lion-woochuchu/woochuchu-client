import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import Layout from 'Layout/Layout'
import PageTitles from 'Components/PageTitles/PageTitles'
import AnimalData from 'Data/animal.json'
import InputBox from 'Components/BeMyBaby/Feed/InputBox'
import SelectBox from 'Components/BeMyBaby/Feed/SelectBox'
import Address from 'Components/BeMyBaby/Write/Address'
import AnimalSelectBtn from 'Components/MyBaby/AnimalSelectBtn/AnimalSelectBtn'
import Button from 'Components/Common/Button'
import { useHistory } from 'react-router-dom'
import getDataFromLocalStorage from 'Utils/Storage/GetDataFromLocalStorage'
import ImageInput from 'Components/BeMyBaby/Write/ImageInput'

export default function FamilyWrite() {
  const history = useHistory()
  const token = getDataFromLocalStorage('token')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [uploadImg, setUploadImg] = useState('')
  const [storedImg, setStoredImg] = useState([])
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
      postData.img_url &&
      phoneNumber.phone.length > 0 &&
      address.length > 0 &&
      detailAddress.length > 0 &&
      postData.animal
    )
      setDisabled(false)
  }, [postData, phoneNumber, address, detailAddress])

  // const handleContentChange = (e) => {
  //   setPostData((prev) => ({
  //     ...prev,
  //     body: e.target.value,
  //   }))
  // }

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
          Authorization: `Bearer ${token}`,
        },
        body: {
          ...postData,
          age: parseInt(postData.age),
          ...(phoneNumber ? { phone: phoneNumber } : {}),
          ...(detailAddress ? { address_detail: detailAddress } : {}),
          address_name: address,
        },
      })
      .then((res) => {
        console.log(res)
        history.push('/bemybaby')
      })
      .catch((err) => console.error(err))
      .finally(console.log('프로세스 끝'))
  }

  return (
    <Layout>
      <div>
        <PageTitles title="가족이 되어주세요" />
        <Container>
          <ImageInput
            uploadImg={uploadImg}
            storedImg={storedImg}
            setUploadImg={setUploadImg}
            setStoredImg={setStoredImg}
          />
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
