import React from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import PageTitles from 'Components/PageTitles/PageTitles'

export default function MyBaby() {
  return (
    <Layout>
      <Container>
        <PageTitles
          title="내 새끼 자랑하기"
          subtitle="소중한 반려동물을 자랑하는 공간입니다."
        />
        <div>My baby</div>
        <div>My baby</div>
      </Container>
    </Layout>
  )
}
const Container = styled.div`
  min-width: 700px;
`
