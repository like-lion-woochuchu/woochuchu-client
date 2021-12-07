import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router'
import Layout from 'Layout/Layout'
import PageTitles from 'Components/PageTitles/PageTitles'
import ScrollTopBtn from 'Components/SideBtn/ScrollTopBtn'
import WriteBtn from 'Components/SideBtn/WriteBtn'
import AnimalSelectBtn from 'Components/MyBaby/AnimalSelectBtn/AnimalSelectBtn'
import axios from 'axios'
import getDataFromLocalStorage from 'Utils/Storage/GetDataFromLocalStorage'
import AnimalData from 'Data/animal.json'
import Button from 'Components/Common/Button'
import ImageInput from 'Components/MyBaby/WritePage/ImageInput'

export default function MyBabyWrite() {
  const [postData, setPostData] = useState({
    body: '',
    img_url: '',
    animal: 0,
  })

  const [uploadImg, setUploadImg] = useState('')
  const [storedImg, setStoredImg] = useState([])
  const [selectedAnimal, setSelectedAnimal] = useState('')
  const history = useHistory()
  const token = getDataFromLocalStorage('token')

  useEffect(() => {
    setPostData((prev) => ({
      ...prev,
      animal: AnimalData.animalData[selectedAnimal],
    }))
  }, [selectedAnimal])

  const handleBodyChange = (e) => {
    setPostData((prev) => ({
      ...prev,
      body: e.target.value,
    }))
  }

  const handleSubmitClick = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/mybaby/`,
        {
          body: postData.body,
          img_url: storedImg.join('|'),
          animal: postData.animal,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => history.push('/mybaby'))
  }

  return (
    <Layout>
      <div>
        <PageTitles
          title="내 새끼 자랑하기"
          subtitle="소중한 반려동물을 자랑하는 공간입니다."
        />
        <Container>
          <ContentBox>
            <ContentArea
              placeholder={'내용을 입력해주세요.'}
              onChange={(e) => handleBodyChange(e)}
            />
          </ContentBox>
          <ImageInput
            uploadImg={uploadImg}
            storedImg={storedImg}
            setUploadImg={setUploadImg}
            setStoredImg={setStoredImg}
          />
          <AnimalSelectBtn
            selectedAnimal={selectedAnimal}
            setSelectedAnimal={setSelectedAnimal}
            multiselect={false}
          />
          <SubmitButtonBox>
            <Button
              disabled={!postData.body || !postData.animal || !storedImg.length}
              text="글쓰기"
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
