import React from 'react'
import styled from 'styled-components/macro'

export default function PageTitles({ title, subtitle }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 80px 0 80px 15px;
`

const Title = styled.p`
  font-size: 22px;
  margin-bottom: 7px;
  font-weight: 700;
`

const Subtitle = styled.p`
  font-size: 16px;
`
