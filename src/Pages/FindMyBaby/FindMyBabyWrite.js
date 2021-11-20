import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import PageTitles from 'Components/PageTitles/PageTitles'
import ScrollTopBtn from 'Components/SideBtn/ScrollTopBtn'
import WriteBtn from 'Components/SideBtn/WriteBtn'
import insertPhotoImg from 'Assets/Icon/icons_insert-picture.png'
import AnimalSelectBtn from 'Components/MyBaby/AnimalSelectBtn/AnimalSelectBtn'
import InputBox from 'Components/FindMyBaby/Feed/InputBox'
import AnimalData from 'Data/animal.json'

export default function FindMyBabyWrite() {
  const [postData, setPostData] = useState({
    title: '',
    breed: '',
    sex: 0,
    age: 0,
    last_seen: '',
    body: '',
    img_url: [],
    phone: '',
    address: 0,
    animal: 0,
  })
  const [selectedAnimal, setSelectedAnimal] = useState('')

  useEffect(() => {
    setPostData((prev) => ({
      ...prev,
      animal: AnimalData.animalData[selectedAnimal],
    }))
  }, [selectedAnimal])

  const handleContentChange = (e) => {
    // setContent(e.target.value)
  }
  console.log(postData)

  return (
    <Layout>
      <div>
        <PageTitles
          title="찾아주세요"
          subtitle="실종된 반려동물을 가족들의 품으로"
        />
        <Container>
          <InputBox
            title="제목"
            placeHolder="제목을 입력해주세요."
            name="title"
            setInput={setPostData}
          />
          <ContentBox>
            <ContentArea
              placeholder={'내용을 입력해주세요.'}
              onChange={(e) => handleContentChange(e)}
            />
          </ContentBox>
          <AnimalImgBox>
            <AnimalImg src={insertPhotoImg} alt="" />
          </AnimalImgBox>
          <AnimalSelectBtn
            selectedAnimal={selectedAnimal}
            setSelectedAnimal={setSelectedAnimal}
            multiselect={false}
          />
          <SubmitButtonBox>
            <SubmitButton disabled={true}>글쓰기</SubmitButton>
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
const AnimalImgBox = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18%;
  min-height: 120px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  opacity: 1;
`
const AnimalImg = styled.img`
  width: 25%;
  height: 25%;
`
const SubmitButton = styled.button`
  margin-top: 15px;
  padding: 32px 40px 32px 40px;
  width: 180px;
  height: 90px;
  background: #e9e9e9 0% 0% no-repeat padding-box;
  border-radius: 45px;
  text-align: center;
  font: normal normal bold 18px/26px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: #6f6e6f;
  opacity: 1;
`
const SubmitButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
