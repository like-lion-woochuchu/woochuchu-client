import React from 'react'
import styled from 'styled-components/macro'

export default function PostText() {
  return (
    <Wrapper>
      <TextContainer>
        어쩌구저쩌구 이건 본문입니다.어쩌구저쩌구 이건 본문입니다.어쩌구저쩌구
        이건 본문입니다.어쩌구저쩌구 이건 본문입니다.어쩌구저쩌구 이건
        본문입니다.어쩌구저쩌구 이건 본문입니다.어쩌구저쩌구 이건
        본문입니다.어쩌구저쩌구 이건 본문입니다.
      </TextContainer>
      <MoreBtn>더보기</MoreBtn>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 30px;
`
const TextContainer = styled.p`
  font-size: 18px;
  text-align: left;
`
const MoreBtn = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #32b67a;
`
