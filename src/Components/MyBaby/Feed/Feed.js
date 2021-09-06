import React from 'react'
import styled from 'styled-components/macro'
import Post from 'Components/MyBaby/Feed/Post'

export default function Feed() {
  return (
    <Wrapper>
      <Post />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: #fff;
`
