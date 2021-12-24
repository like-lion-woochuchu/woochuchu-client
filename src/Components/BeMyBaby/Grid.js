import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import Dog from 'Assets/Images/Animals/Dog.png'
import getDataFromLocalStorage from 'Utils/Storage/GetDataFromLocalStorage'

export default function Grid() {
  const [animals, setAnimals] = useState([])
  const [error, setError] = useState(true)
  const token = getDataFromLocalStorage('token')

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/bemybaby/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setError(false)
        setAnimals(res.data.results.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  console.log(animals)

  // useEffect(() => {
  //   if (!token) {
  //     alert('로그인이 필요합니다.')
  //     history.push('/login')
  //     return
  //   }
  // })
  if (error) return <div>Loading...</div>
  if (!animals) return <div>no animal</div>

  return (
    <div>
      {animals.map((animal) => (
        <>
          <UserWrap>
            <LeftUserWrap>
              <UserImageWrap src={Dog} alt="Dog" />
              <UserNameWrap>{animal.user.nickname}</UserNameWrap>
            </LeftUserWrap>
            <RightUserWrap>{animal.created_at}</RightUserWrap>
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
                {animal.adopt_flag !== 0 ? (
                  <Img src={Dog /* animal.img_url */} alt="Dog" />
                ) : (
                  <>
                    <Img src={Dog} alt="Dog" />
                    <AdoptedWrap></AdoptedWrap>
                  </>
                )}
              </LeftImageWrap>
            </LeftWrap>
            <RightWrap>
              <SectionWrap>
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
              </SectionWrap>
              <SectionWrap>
                <TitleWrap>특징</TitleWrap>
                <DescriptionWrap>{animal.description}</DescriptionWrap>
              </SectionWrap>
              <SectionWrap>
                <TitleWrap>접수 일시</TitleWrap>
                <DescriptionWrap>{animal.created_at}</DescriptionWrap>
                <AddressWrap>최근 수정: {animal.updated_at}</AddressWrap>
              </SectionWrap>
              <SectionWrap>
                <TitleWrap>발생장소</TitleWrap>
                <DescriptionWrap>{animal.address.address_name}</DescriptionWrap>
              </SectionWrap>
              <SectionWrap>
                <TitleWrap>공고일</TitleWrap>
                <DescriptionWrap>API업데이트 필요</DescriptionWrap>
              </SectionWrap>
              <SectionWrap>
                <TitleWrap>관할보호센터</TitleWrap>
                <DescriptionWrap>API업데이트 필요</DescriptionWrap>
                <AddressWrap>상세주소: API업데이트 필요</AddressWrap>
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
        </>
      ))}
    </div>
  )
}

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

const AdoptedWrap = styled.div`
  background-color: black;
  z-index: 1000;
  width: 100%;
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
  height: 450px;
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
  height: 450px;
  padding: 22px 0;
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
  display: inline-block;
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
