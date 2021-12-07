import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import InsertPhotoImg from 'Assets/Icon/icons_insert-picture.png'
import CloseBtn from 'Assets/Icon/cancel.png'
import getDataFromLocalStorage from 'Utils/Storage/GetDataFromLocalStorage'

export default function ImageInput({
  uploadImg,
  storedImg,
  setUploadImg,
  setStoredImg,
}) {
  const token = getDataFromLocalStorage('token')
  useEffect(() => {
    if (uploadImg) {
      const image = new FormData()
      image.append('file', uploadImg)
      axios
        .post(`${process.env.REACT_APP_API_URL}/image/`, image, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) =>
          setStoredImg((prev) => [...prev, res.data.results.img_url])
        )
    }
  }, [uploadImg, setStoredImg, token])

  const handleImageChange = (e) => {
    setUploadImg(e.target.files[0])
  }

  const handleImgCancelClick = (e) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/image/`,

        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          data: { img_url: e.target.alt },
        }
      )
      .then(() =>
        setStoredImg((prev) => prev.filter((img) => img !== e.target.alt))
      )
  }

  return (
    <AnimalImgContainer>
      <AnimalImgBox htmlFor="image">
        <AnimalImg src={InsertPhotoImg} alt="" />
        <ImgInput type="file" id="image" onChange={handleImageChange} />
      </AnimalImgBox>
      {storedImg &&
        storedImg.map((img, index) => (
          <StoredImgBox key={index}>
            <CancelBtn
              src={CloseBtn}
              alt={img}
              onClick={handleImgCancelClick}
            />
            <StoredImg src={img} alt="" />
          </StoredImgBox>
        ))}
    </AnimalImgContainer>
  )
}
const AnimalImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`
const AnimalImgBox = styled.label`
  margin: 0 5px 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18%;
  min-height: 120px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  opacity: 1;
`
const AnimalImg = styled.img`
  width: 25%;
  height: 25%;
`
const ImgInput = styled.input`
  display: none;
`

const StoredImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 120px;
  min-height: 120px;
  border-radius: 45px;
  border: solid 3px #f8f8f8;
`
const StoredImgBox = styled.div`
  position: relative;
  margin: 0 5px 5px;
`
const CancelBtn = styled.img`
  position: absolute;
  width: 25px;
  top: 0px;
  right: 3px;
  z-index: 9999;
  border-radius: 20px;
  border: solid 1px #f6efe5;
  background-color: #f6efe5;
  padding: 5px;
`
