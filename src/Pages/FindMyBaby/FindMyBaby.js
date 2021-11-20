import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import PageTitles from 'Components/PageTitles/PageTitles'
import Feed from 'Components/FindMyBaby/Feed/Feed'
import ScrollTopBtn from 'Components/SideBtn/ScrollTopBtn'
import WriteBtn from 'Components/SideBtn/WriteBtn'

export default function FindMyBaby() {
  const history = useHistory()

  return (
    <Layout>
      <Container>
        <PageTitles
          title="찾아주세요"
          subtitle="실종된 반려동물을 가족들의 품으로"
        />
        <Feed type={'findmybaby'} />
      </Container>
      <WriteBtn
        handleClick={() => {
          history.push('/findmybaby_write')
        }}
      />
      <ScrollTopBtn />
    </Layout>
  )
}
const Container = styled.div`
  max-width: 700px;
`
