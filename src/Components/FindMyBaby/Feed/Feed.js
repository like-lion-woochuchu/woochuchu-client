import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import PostImage from 'Components/Post/PostImage'
import PostReactionButton from 'Components/Post/PostReactionButton'
import PostBody from 'Components/Post/PostBody'
import FindPostHeader from 'Components/FindMyBaby/Post/FindPostHeader'
import getDataFromLocalStorage from 'Utils/Storage/GetDataFromLocalStorage'
import useIntersectObserver from 'Utils/Hooks/useIntersectObserver'

export default function Feed({ type, selectedAnimal }) {
  const [postData, setPostData] = useState([])
  const [isDataLeft, setIsDataLeft] = useState(true)
  const [page, setPage] = useState(0)
  const intersectRef = useRef(null)
  const { isVisible } = useIntersectObserver(intersectRef, {
    rootMargin: '50px',
    threshold: 0.01,
  })

  const history = useHistory()
  const token = getDataFromLocalStorage('token')

  useEffect(() => {
    if (selectedAnimal.length) {
      setPage(0)
      setPostData([])
    }
  }, [selectedAnimal])

  useEffect(() => {
    if (isVisible) {
      setPage((prev) => prev + 1)
    }
  }, [isVisible])

  useEffect(() => {
    if (page < 1) return
    const animal = selectedAnimal.join(',')
    if (selectedAnimal.length) {
      if (page < 2) {
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/${type}/?animals_id=${animal}&page=${page}`,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => setPostData(res.data.results.data))
          .catch((err) => {
            if (err.response.status === 500) {
              setIsDataLeft(false)
            }
          })
      } else {
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/${type}/?animals_id=${animal}&page=${page}`,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) =>
            setPostData((prev) => [...prev, ...res.data.results.data])
          )
          .catch((err) => {
            if (err.response.status === 500) {
              setIsDataLeft(false)
            }
          })
      }
    }
  }, [token, type, page, selectedAnimal])

  useEffect(() => {
    if (!token) {
      alert('로그인이 필요합니다.')
      history.push('/login')
      return
    }
    if (page < 1) return
    if (selectedAnimal.length) return
    axios
      .get(`${process.env.REACT_APP_API_URL}/${type}/?page=${page}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setPostData((prev) => [...prev, ...res.data.results.data]))
      .catch((err) => {
        if (err.response.status === 500) {
          setIsDataLeft(false)
        }
      })
  }, [history, token, type, page, selectedAnimal.length])

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
      {isDataLeft && <div ref={intersectRef}>Loading...</div>}
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
