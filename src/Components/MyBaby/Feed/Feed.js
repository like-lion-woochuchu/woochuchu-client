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
  /* max-width: 700px;
  margin-top: 30px;
  border: solid 0.2px #707070;
  border-radius: 10px; */
`
