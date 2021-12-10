import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import PostImage from 'Components/Post/PostImage'
import PostReactionButton from 'Components/Post/PostReactionButton'
import PostBody from 'Components/Post/PostBody'
import FindPostHeader from 'Components/FindMyBaby/Post/FindPostHeader'
import getDataFromLocalStorage from 'Utils/Storage/GetDataFromLocalStorage'

export default function Feed({ type, selectedAnimal }) {
  const [postData, setPostData] = useState([])
  const history = useHistory()
  const token = getDataFromLocalStorage('token')

  useEffect(() => {
    if (!token) {
      alert('로그인이 필요합니다.')
      history.push('/login')
    } else {
      let animal = ''
      if (selectedAnimal.length) {
        animal = selectedAnimal.join(',')
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/${type}/?animals_id=${animal}`,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => setPostData(res.data.results.data))
      } else {
        axios
          .get(`${process.env.REACT_APP_API_URL}/${type}/`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => setPostData(res.data.results.data))
      }
    }
  }, [history, token, type, selectedAnimal])

  return (
    <>
      {postData.map((data, index) => (
        <Wrapper key={index}>
          <FindPostHeader date={data.updated_at} findState={data.find_flag} />
          <PostContainer>
            <PostTitle>{data.title}</PostTitle>
            <PostImage imgUrl={data.img_url} />
            <PostReactionButton
              type={type}
              numOfComments={data.comments.length}
            />
            <PostBody
              data={data}
              postId={data.id}
              body={data.body}
              type={type}
            />
          </PostContainer>
        </Wrapper>
      ))}
    </>
  )
}
const Wrapper = styled.div`
  background-color: #fff;
  min-width: 700px;
  margin: 30px 0;
  border: solid 0.2px #707070;
  border-radius: 10px;
`

const PostContainer = styled.div`
  padding: 0px 15px 30px;
`

const PostTitle = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`
