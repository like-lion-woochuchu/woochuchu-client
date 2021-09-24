import React from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import PageTitles from 'Components/PageTitles/PageTitles'
import Post from 'Components/MyBaby/Feed/Post'

export default function FindMyBaby() {
  return (
    <Layout>
      <Container>
        <PageTitles
          title="찾아주세요"
          subtitle="실종된 반려동물을 가족들의 품으로"
        />
        <Post type={'findmybaby'} />
      </Container>
    </Layout>
  )
}
const Container = styled.div`
  max-width: 700px;
`
