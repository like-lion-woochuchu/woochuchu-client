import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import Dog from 'Assets/Images/Animals/Dog.png'
import getDataFromLocalStorage from 'Utils/Storage/GetDataFromLocalStorage'
import Map from 'Components/Common/Map'
import DateParse from 'Utils/DateParse'
import { useHistory } from 'react-router-dom'
import CommentInput from 'Components/Post/CommentInput'
import useIntersectObserver from 'Utils/Hooks/useIntersectObserver'
import PostReactionButton from 'Components/Post/PostReactionButton'

export default function Grid({ type, animal }) {
  const [animals, setAnimals] = useState([])
  const [page, setPage] = useState(0)
  const [fetchTrigger, setFetchTrigger] = useState(0)
  const [isDataLeft, setIsDataLeft] = useState(true)
  const intersectRef = useRef(null)
  const token = getDataFromLocalStorage('token')
  const history = useHistory()

  const { isVisible } = useIntersectObserver(intersectRef, {
    rootMargin: '50px',
    threshold: 0.01,
  })

  useEffect(() => {
    if (isVisible) {
      setPage((prev) => prev + 1)
    }
  }, [isVisible])

  useEffect(() => {
    if (animal.length) {
      setPage(0)
      setAnimals([])
    }
  }, [animal])

  useEffect(() => {
    if (page < 1) return
    const animalType = animal.join(',')
    if (animal.length) {
      if (page < 2) {
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/${type}/?animals_id=${animalType}&page=${page}`,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            setAnimals(res.data.results.data)
          })
          .catch((err) => {
            if (err.response.status === 500) {
              setIsDataLeft(false)
            }
          })
      } else {
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/${type}/?animals_id=${animalType}&page=${page}`,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            setAnimals((prev) => [...prev, ...res.data.results.data])
          })
          .catch((err) => {
            if (err.response.status === 500) {
              setIsDataLeft(false)
            }
          })
      }
    }
  }, [token, type, page, animal, animals])

  useEffect(() => {
    if (!token) {
      alert('로그인이 필요합니다.')
      history.push('/login')
      return
    }
    if (page < 1) return
    if (animal.length) return
    axios
      .get(`${process.env.REACT_APP_API_URL}/${type}/?page=${page}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setAnimals((prev) => [...prev, ...res.data.results.data]))
      .catch((err) => {
        if (err.response.status === 500) {
          setIsDataLeft(false)
        }
      })
  }, [history, token, type, page, animal.length])

  if (!animals) return <div>no animal</div>

  return (
    <div>
      {animals.map((animal, idx) => (
        <AnimalWrap key={idx}>
          <UserWrap key={animal.user.id}>
            <LeftUserWrap>
              <UserImageWrap src={Dog} alt="Sample" />
              <UserNameWrap>{animal.user.nickname}</UserNameWrap>
            </LeftUserWrap>
            <RightUserWrap>
              {DateParse(animal.created_at).date}{' '}
              {DateParse(animal.created_at).time}
            </RightUserWrap>
          </UserWrap>
          <GridWrap key={animal.id}>
            <LeftWrap>
              <LeftTitleWrap>
                {animal.sex === 0 ? (
                  <LeftFontWrap>
                    {animal.breed} ({animal.age}세, 남)
                  </LeftFontWrap>
                ) : (
                  <LeftFontWrap>
                    {animal.breed} ({animal.age}세, 여)
                  </LeftFontWrap>
                )}
              </LeftTitleWrap>
              <LeftImageWrap>
                {animal.adopt_flag === 0 ? (
                  <Img src={Dog} alt="Sample" />
                ) : (
                  <>
                    <Img src={Dog} alt="Sample" />
                    <AdoptedWrap>
                      <AdoptedMessage>입양됨</AdoptedMessage>
                    </AdoptedWrap>
                  </>
                )}
              </LeftImageWrap>
            </LeftWrap>
            <RightWrap>
              {/* <SectionWrap>
                <TitleWrap>품종</TitleWrap>
                <DescriptionWrap>{animal.breed}</DescriptionWrap>
              </SectionWrap>
              <SectionWrap>
                <TitleWrap>성별</TitleWrap>
                {animal.sex === 0 ? (
                  <DescriptionWrap>남성</DescriptionWrap>
                ) : (
                  <DescriptionWrap>여성</DescriptionWrap>
                )}
              </SectionWrap> */}
              <SectionWrap>
                <TitleWrap>특징</TitleWrap>
                <DescriptionWrap>{animal.description}</DescriptionWrap>
              </SectionWrap>
              <SectionWrap>
                <TitleWrap>접수 일시</TitleWrap>
                {animal.created_at !== animal.updated_at ? (
                  <>
                    <DescriptionWrap>
                      {DateParse(animal.created_at).date}{' '}
                      {DateParse(animal.created_at).time}
                    </DescriptionWrap>
                    <AddressWrap>
                      최근 수정: {DateParse(animal.updated_at).date}{' '}
                      {DateParse(animal.updated_at).time}
                    </AddressWrap>
                  </>
                ) : (
                  <DescriptionWrap style={{ marginTop: '3px' }}>
                    {DateParse(animal.created_at).date}{' '}
                    {DateParse(animal.created_at).time}
                  </DescriptionWrap>
                )}
              </SectionWrap>
              <SectionWrap>
                <TitleWrap>발생장소</TitleWrap>
                {animal.address_detail ? (
                  <>
                    <DescriptionWrap>
                      {animal.address.address_name}{' '}
                    </DescriptionWrap>
                    <AddressWrap>상세주소: {animal.address_detail}</AddressWrap>
                  </>
                ) : (
                  <DescriptionWrap style={{ marginTop: '3px' }}>
                    {animal.address.address_name}{' '}
                  </DescriptionWrap>
                )}
                <MapWrap>
                  <Map
                    key={animal.id}
                    cordX={animal.address.address_coord_x}
                    cordY={animal.address.address_coord_y}
                    width={'250px'}
                    height={'250px'}
                    margin={'10px 0'}
                  />
                </MapWrap>
              </SectionWrap>
              <SectionWrap>
                <PhoneNumberWrap>전화번호</PhoneNumberWrap>
                {animal.phone !== '' ? (
                  <PhoneNumberDescriptionWrap>
                    {animal.phone}
                  </PhoneNumberDescriptionWrap>
                ) : (
                  <PhoneNumberDescriptionWrap>없음</PhoneNumberDescriptionWrap>
                )}
              </SectionWrap>
            </RightWrap>
          </GridWrap>
          <PostReactionButton
            postId={animal.id}
            type="bemybaby"
            message={true}
            receiver={animal.user.id}
            nickname={animal.user.nickname}
            numOfComments={animal.comments.length}
            fetchTrigger={fetchTrigger}
          />
          <CommentWrap>
            <CommentInput
              postId={animal.id}
              type={type}
              comments={animal.comments}
              setFetchTrigger={setFetchTrigger}
            />
          </CommentWrap>
        </AnimalWrap>
      ))}
      {isDataLeft && <div ref={intersectRef}>Loading...</div>}
    </div>
  )
}
const CommentWrap = styled.div`
  margin: 20px;
`

const AnimalWrap = styled.div`
  border: 1px solid rgb(72, 72, 72);
  margin-bottom: 50px;
  padding: 30px 0;
  border-radius: 20px;
`
const MapWrap = styled.div`
  display: flex;
  justify-content: center;
`

const RightUserWrap = styled.div`
  margin-right: 25px;
`

const UserImageWrap = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 10px;
`
const LeftUserWrap = styled.div`
  display: flex;
  align-items: center;
`
const UserNameWrap = styled.div`
  font-size: 15px;
`
const UserWrap = styled.div`
  margin: 0 0 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const AdoptedMessage = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const AdoptedWrap = styled.div`
  background-color: black;
  position: absolute;
  bottom: 0.01%;
  opacity: 80%;
  z-index: 1000;
  width: 100%;
  height: 100%;
`

const GridWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 30px;
`

const Img = styled.img`
  height: 385px;
  z-index: 2;
  position: relative;
  background-position: center;
  border-bottom-left-radius: 10px;
  background-size: cover;
`
const LeftTitleWrap = styled.div`
  width: 339px;
  height: 65px;
  text-align: left;
  background-color: ${(props) => (props.adopt_flag ? '#e9e9e9' : '#32b67a')};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const LeftFontWrap = styled.p`
  padding-top: 17px;
  margin-left: 15px;
  font-size: 20px;
  color: white;
`

const LeftWrap = styled.div`
  width: 339px;
`

const LeftImageWrap = styled.div`
  position: relative;
  z-index: 1;
  width: 339px;
  height: 385px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
const RightWrap = styled.div`
  width: 380px;
  padding: 5px 0;
  box-shadow: 0px 6px 10px 0px #00000014;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`
const SectionWrap = styled.div`
  margin-bottom: 12px;
`
const TitleWrap = styled.h2`
  display: inline-block;
  color: #32b67a;
  font-size: 18px;
  padding-left: 19px;
`
const DescriptionWrap = styled.h2`
  display: block;
  float: right;
  padding-right: 26px;
  color: #1d1e20;
`
const PhoneNumberWrap = styled.h2`
  display: inline-block;
  color: #32b67a;
  font-size: 18px;
  padding-left: 19px;
`
const PhoneNumberDescriptionWrap = styled.h2`
  display: block;
  float: right;
  padding-right: 26px;
  color: #1d1e20;
`

const AddressWrap = styled.h2`
  display: flex;
  justify-content: flex-end;
  padding-right: 26px;
  color: #707070;
`
