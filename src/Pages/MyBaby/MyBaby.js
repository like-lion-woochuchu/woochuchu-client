import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import PageTitles from 'Components/PageTitles/PageTitles'
import AnimalSelectBtn from 'Components/MyBaby/AnimalSelectBtn/AnimalSelectBtn'
import Feed from 'Components/MyBaby/Feed/Feed'
<<<<<<< HEAD
import axios from 'axios'
=======
>>>>>>> b20e03bec2b6b3c9a8d0d82a6f4da8cba16c25ea

export default function MyBaby() {
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
        />
<<<<<<< HEAD
        <Feed />
=======
        <Feed type={'mybaby'} />
>>>>>>> b20e03bec2b6b3c9a8d0d82a6f4da8cba16c25ea
      </Container>
    </Layout>
  )
}
const Container = styled.div`
  max-width: 700px;
`
