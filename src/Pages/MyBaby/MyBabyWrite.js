import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import PageTitles from 'Components/PageTitles/PageTitles'
import ScrollTopBtn from 'Components/SideBtn/ScrollTopBtn'
import WriteBtn from 'Components/SideBtn/WriteBtn'
import insertPhotoImg from 'Assets/Icon/icons_insert-picture.png'
import AnimalSelectBtn from 'Components/MyBaby/AnimalSelectBtn/AnimalSelectBtn'

export default function MyBabyWrite() {
  const [content, setContent] = useState('')
  const [selectedAnimal, setSelectedAnimal] = useState([])

  const handleContentChange = (e) => {
    setContent(e.target.value)
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
              onChange={(e) => handleContentChange(e)}
            />
          </ContentBox>
          <AnimalImgBox>
            <AnimalImg src={insertPhotoImg} alt="" />
          </AnimalImgBox>
          <AnimalSelectBtn
            animalArr={[
              '강아지',
              '고양이',
              '물고기',
              '새',
              '곤충',
              '파충류 / 양서류',
              '기타',
            ]}
            selectedAnimal={selectedAnimal}
            setSelectedAnimal={setSelectedAnimal}
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
