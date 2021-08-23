import React from 'react'
import styled from 'styled-components/macro'
import PostHeader from 'Components/MyBaby/Feed/PostHeader'

export default function Post() {
  return (
    <Wrapper>
      <PostHeader name="우쭈쭈" date="2021-08-21" />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-width: 700px;
  margin: 30px;
  border: solid 0.2px #707070;
  border-radius: 10px;
`
