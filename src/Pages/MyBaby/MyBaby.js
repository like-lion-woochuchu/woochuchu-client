import React from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import PageTitles from 'Components/PageTitles/PageTitles'
import AnimalSelectBtn from 'Components/MyBaby/AnimalSelectBtn/AnimalSelectBtn'
import Feed from 'Components/MyBaby/Feed/Feed'

export default function MyBaby() {
  return (
    <Layout>
      <Container>
        <PageTitles
          title="내 새끼 자랑하기"
          subtitle="소중한 반려동물을 자랑하는 공간입니다."
        />
        <AnimalSelectBtn animalArr={['강아지', '고양이', '새', '물고기']} />
        <Feed />
      </Container>
    </Layout>
  )
}
const Container = styled.div`
  min-width: 700px;
`
