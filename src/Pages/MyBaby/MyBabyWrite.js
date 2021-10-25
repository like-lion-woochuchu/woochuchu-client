import React from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import PageTitles from 'Components/PageTitles/PageTitles'
import ScrollTopBtn from 'Components/SideBtn/ScrollTopBtn'
import WriteBtn from 'Components/SideBtn/WriteBtn'

export default function MyBabyWrite() {
  return (
    <Layout>
      <div>
        <PageTitles
          title="내 새끼 자랑하기"
          subtitle="소중한 반려동물을 자랑하는 공간입니다."
        />
        <Container>
          <TitleBox>
            <Title>제목</Title>
            <TitleInput placeholder={'제목을 입력해주세요.'} />
          </TitleBox>
          <ContentBox>
            <ContentArea placeholder={'내용을 입력해주세요.'} />
          </ContentBox>
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
  height: 870px;
  border: 0.3px solid #dedede;
  border-radius: 30px;
`

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 32px 40px;
  width: 100%;
  height: 90px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
`

const Title = styled.text`
  display: flex;
  align-items: center;
  font: normal normal bold 18px/26px Noto Sans CJK KR;
  text-align: left;
  letter-spacing: 0px;
  color: #1d1e20;
  opacity: 1;
`

const TitleInput = styled.input`
  width: 92%;

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
`
const ContentBox = styled.div`
  margin-bottom: 50px;
  padding: 32px 40px;
  width: 100%;
  height: 40%;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  opacity: 1;
`

const ContentArea = styled.textarea`
  width: 580px;
  height: 100%;
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
