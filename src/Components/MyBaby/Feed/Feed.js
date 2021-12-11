import React, { useEffect, useState, useCallback } from 'react'
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

export default function Feed({ type, selectedAnimal }) {
  const [postData, setPostData] = useState([])
  const [target, setTarget] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [page, setPage] = useState(1)
  const [fetchTrigger, setFetchTrigger] = useState(0)
  const [isDataLeft, setIsDataLeft] = useState(true)
  const history = useHistory()
  const token = getDataFromLocalStorage('token')

  const getMoreItem = async () => {
    setIsLoaded(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setPage((prev) => prev + 1)
    setIsLoaded(false)
  }
  const onIntersect = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting && !isLoaded) {
        observer.unobserve(entry.target)
        await getMoreItem()
        observer.observe(entry.target)
      }
    },
    [isLoaded]
  )

  useEffect(() => {
    let observer
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0,
        rootMargin: '30px',
      })
      observer.observe(target)
    }
    return () => observer && observer.disconnect()
  }, [target, onIntersect])

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
            `${process.env.REACT_APP_API_URL}/${type}/?animals_id=${animal}/?page=${page}`,
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
      } else {
        axios
          .get(`${process.env.REACT_APP_API_URL}/${type}/?page=${page}`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
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
  }, [history, token, type, fetchTrigger, selectedAnimal, page])
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
            postId={data.id}
            type={type}
            numOfComments={data.comments.length}
            userLikeFlag={data.user_like_flag}
            numOfLikes={data.likes_count}
            setFetchTrigger={setFetchTrigger}
          />
          <PostBody body={data.body} type={type} />
          <CommentInput
            postId={data.id}
            type={type}
            setFetchTrigger={setFetchTrigger}
          />
          <CommentList
            comments={data.comments}
            type={type}
            setFetchTrigger={setFetchTrigger}
          />
        </Wrapper>
      ))}
      {postData && isDataLeft && <div ref={setTarget}></div>}
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
