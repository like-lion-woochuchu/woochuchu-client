import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router'
import Layout from 'Layout/Layout'
import PageTitles from 'Components/PageTitles/PageTitles'
import ScrollTopBtn from 'Components/SideBtn/ScrollTopBtn'
import WriteBtn from 'Components/SideBtn/WriteBtn'
import AnimalSelectBtn from 'Components/MyBaby/AnimalSelectBtn/AnimalSelectBtn'
import InputBox from 'Components/FindMyBaby/Post/InputBox'
import SelectBox from 'Components/FindMyBaby/Post/SelectBox'
import Button from 'Components/Common/Button'
import axios from 'axios'
import getDataFromLocalStorage from 'Utils/Storage/GetDataFromLocalStorage'
import ImageInput from 'Components/MyBaby/WritePage/ImageInput'
import Address from 'Components/SignUp/Address'

export default function FindMyBabyWrite() {
  const [postData, setPostData] = useState({
    name: '',
    title: '',
    breed: '',
    sex: 100,
    age: 0,
    last_seen: '',
    body: '',
    img_url: '',
    phone: '',
  })
  const [selectedAnimal, setSelectedAnimal] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [uploadImg, setUploadImg] = useState('')
  const [storedImg, setStoredImg] = useState([])
  const [address, setAddress] = useState('')
  const [detailAddress, setDetailAddress] = useState('')
  const [addressError] = useState('')

  const history = useHistory()
  const token = getDataFromLocalStorage('token')

  useEffect(() => {
    if (
      postData.name.length &&
      postData.title.length &&
      postData.breed.length &&
      postData.sex !== 100 &&
      postData.age &&
      postData.last_seen.length &&
      storedImg.length &&
      postData.phone.length &&
      address.length &&
      detailAddress.length &&
      selectedAnimal
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [postData, storedImg, address, detailAddress, selectedAnimal])

  const handleBodyChange = (e) => {
    setPostData((prev) => ({
      ...prev,
      body: e.target.value,
    }))
  }

  const handleGenderChange = (e) => {
    let genderNum
    if (e.target.value === '???') {
      genderNum = 1
    } else {
      genderNum = 0
    }
    setPostData((prev) => ({
      ...prev,
      [e.target.name]: genderNum,
    }))
  }

  const handleSubmitClick = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/findmybaby/`,
        {
          name: postData.name,
          breed: postData.breed,
          sex: postData.sex,
          age: postData.age,
          last_seen: postData.last_seen,
          title: postData.title,
          body: postData.body,
          img_url: storedImg.join('|'),
          phone: postData.phone,
          address_name: address,
          address_detail: detailAddress,
          animal: selectedAnimal,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => history.push('/findmybaby'))
      .catch((e) =>
        alert(Object.values(e.response.data.results.msg).toString())
      )
  }

  return (
    <Layout>
      <div>
        <PageTitles
          title="???????????????"
          subtitle="????????? ??????????????? ???????????? ?????????"
        />
        <Container>
          <InputBox
            title="??????"
            placeHolder="????????? ??????????????????."
            name="title"
            setInput={setPostData}
            width="92%"
          />
          <ContentBox>
            <ContentArea
              placeholder={'????????? ??????????????????.'}
              onChange={(e) => handleBodyChange(e)}
            />
          </ContentBox>
          <ImageInput
            uploadImg={uploadImg}
            storedImg={storedImg}
            setUploadImg={setUploadImg}
            setStoredImg={setStoredImg}
          />
          <AnimalSelectTitle>?????? ??????</AnimalSelectTitle>
          <AnimalSelectContainer>
            <AnimalSelectBtn
              selectedAnimal={selectedAnimal}
              setSelectedAnimal={setSelectedAnimal}
              multiselect={false}
            />
          </AnimalSelectContainer>
          <InfoContainer>
            <InputBox
              title={'?????? ??????'}
              placeHolder="????????? ??????????????????."
              name="name"
              setInput={setPostData}
              width="72%"
            />

            <InfoBox>
              <InputBox
                title="???"
                placeHolder="?????? ??????????????????."
                name="breed"
                setInput={setPostData}
              />
            </InfoBox>
          </InfoContainer>

          <InfoContainer>
            <InputBox
              title="??????"
              placeHolder="????????? ??????????????????."
              name="age"
              setInput={setPostData}
              width="82%"
            />
            <InfoBox>
              <SelectBox
                title="??????"
                listArr={['???', '???']}
                name="sex"
                handleChange={(e) => handleGenderChange(e)}
                width="75%"
              />
            </InfoBox>
          </InfoContainer>
          <PhoneContainer>
            <InputBox
              title={'????????? ?????????'}
              placeHolder="010-0000-0000"
              name="phone"
              width="65%"
              setInput={setPostData}
            />
          </PhoneContainer>

          <LastSeenContainer>
            <InputBox
              title={'????????? ?????? ??????'}
              placeHolder=""
              name="last_seen"
              setInput={setPostData}
              type="datetime-local"
              width="65%"
            />
          </LastSeenContainer>
          <Address
            address={address}
            detailAddress={detailAddress}
            setAddress={setAddress}
            setDetailAddress={setDetailAddress}
            error={addressError}
            width="590px"
            padding="32px 25px"
          />
          <SubmitButtonBox>
            <Button
              disabled={disabled}
              text="?????????"
              handleClick={handleSubmitClick}
            />
          </SubmitButtonBox>
        </Container>
      </div>
      <WriteBtn />
      <ScrollTopBtn />
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

const SubmitButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
const InfoContainer = styled.div`
  display: flex;
`
const InfoBox = styled.div`
  margin-left: 10px;
  width: 40%;
`
const PhoneContainer = styled.div`
  width: 60%;
`
const LastSeenContainer = styled.div`
  width: 68%;
`
const AnimalSelectContainer = styled.div`
  margin-bottom: 15px;
`
const AnimalSelectTitle = styled.div`
  margin: 15px 0;
  font: normal normal bold 18px/26px Noto Sans CJK KR;
  color: #1d1e20;
`
