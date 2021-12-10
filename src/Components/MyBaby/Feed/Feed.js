import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import PostHeader from 'Components/Post/PostHeader'
import PostImage from 'Components/Post/PostImage'
import PostReactionButton from 'Components/Post/PostReactionButton'
import PostBody from 'Components/Post/PostBody'
import CommentInput from 'Components/Post/CommentInput'
import CommentList from 'Components/Post/CommentList'
import getDataFromLocalStorage from 'Utils/Storage/GetDataFromLocalStorage'

export default function Feed({ type }) {
  const [postData, setPostData] = useState([])
  const history = useHistory()

  useEffect(() => {
    const token = getDataFromLocalStorage('token')
    if (!token) {
      alert('로그인이 필요합니다.')
      history.push('/login')
    } else {
      axios
        .get(`${process.env.REACT_APP_API_URL}/${type}/`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setPostData(res.data.results.data))
      console.log(postData)
    }
  }, [])
  return (
    <>
      {postData.map((data, index) => (
        <Wrapper key={index}>
          <PostHeader
            nickname={data.user.nickname}
            profileImg={data.user.profile_img}
            date={data.created_at}
          />
          <PostImage imgUrl={data.img_url} />
          <PostReactionButton
            type={type}
            numOfComments={data.comments.length}
            numOfLikes={data.likes_count}
          />
          <PostBody body={data.body} type={type} />
          <CommentInput postId={data.id} type={type} />
          <CommentList comments={data.comments} feedId={data.id} type={type} />
        </Wrapper>
      ))}
    </>
  )
}
const Wrapper = styled.div`
  background-color: #fff;
  min-width: 700px;
  margin: 30px 0;
  padding: 30px 15px;
  border: solid 0.2px #707070;
  border-radius: 10px;
`
