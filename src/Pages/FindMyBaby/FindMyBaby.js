import React from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import PageTitles from 'Components/PageTitles/PageTitles'
import Feed from 'Components/FindMyBaby/Feed/Feed'

export default function FindMyBaby() {
  return (
    <Layout>
      <Container>
        <PageTitles
          title="찾아주세요"
          subtitle="실종된 반려동물을 가족들의 품으로"
        />
        <Feed type={'findmybaby'} />
      </Container>
      <div>
        <B>hi</B>
      </div>
    </Layout>
  )
}
const Container = styled.div`
  max-width: 700px;
`

const B = styled.div`
  border: 1px solid;
  width: 40px;
  border-radius: 50%;
  position: fixed;
  bottom: 40px;
  /* bottom: 40px;
  right: 100px; */
`
