import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import PageTitles from 'Components/PageTitles/PageTitles'
import AnimalSelectBtn from 'Components/MyBaby/AnimalSelectBtn/AnimalSelectBtn'
import Feed from 'Components/MyBaby/Feed/Feed'
import ScrollTopBtn from 'Components/SideBtn/ScrollTopBtn'
import WriteBtn from 'Components/SideBtn/WriteBtn'

export default function MyBaby() {
  const [selectedAnimal, setSelectedAnimal] = useState([])

  const history = useHistory()
  return (
    <Layout>
      <Container>
        <PageTitles
          title="내 새끼 자랑하기"
          subtitle="소중한 반려동물을 자랑하는 공간입니다."
        />
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
          multiselect={true}
          selectedAnimal={selectedAnimal}
          setSelectedAnimal={setSelectedAnimal}
        />
        <Feed type={'mybaby'} selectedAnimal={selectedAnimal} />
      </Container>
      <WriteBtn
        handleClick={() => {
          history.push('/mybaby_write')
        }}
      />
      <ScrollTopBtn />
    </Layout>
  )
}
const Container = styled.div`
  max-width: 700px;
`
