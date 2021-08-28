import React from 'react'
import styled from 'styled-components/macro'
import PostHeader from 'Components/MyBaby/Feed/PostHeader'
import Image from 'Components/MyBaby/Feed/PostImage'
import ReactionButton from './PostReactionButton'
import PostText from './PostText'

export default function Post() {
  return (
    <Wrapper>
      <PostHeader name="우쭈쭈" date="2021-08-21" />
      <Image />
      <ReactionButton />
      <PostText />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-width: 700px;
  margin: 30px;
  padding: 30px 15px;
  border: solid 0.2px #707070;
  border-radius: 10px;
`
