import React from 'react'
import styled from 'styled-components/macro'
import AnimalData from 'Data/animal.json'

export default function AnimalSelectBtn({ multiselect, animal, setAnimal }) {
  const animalArr = Object.keys(AnimalData.animalData)
  const handleAnimalSelectBtnClick = (e) => {
    if (multiselect) {
      if (animal.includes(AnimalData.animalData[e.target.innerHTML])) {
        setAnimal((prev) =>
          prev.filter(
            (anm) => anm !== AnimalData.animalData[e.target.innerHTML]
          )
        )
        return
      }
      setAnimal((prev) => [...prev, AnimalData.animalData[e.target.innerHTML]])
      return
    }
    if (animal === AnimalData.animalData[e.target.innerHTML]) {
      setAnimal('')
      return
    }
    setAnimal(AnimalData.animalData[e.target.innerHTML])
  }

  return (
    <BtnContainer>
      {multiselect
        ? animalArr.map((animal, idx) => {
            return (
              <AnimalBtn
                key={idx}
                selected={animal.includes(AnimalData.animalData[animal])}
                onClick={(e) => handleAnimalSelectBtnClick(e)}
              >
                {animal}
              </AnimalBtn>
            )
          })
        : animalArr.map((animal, idx) => {
            return (
              <AnimalBtn
                key={idx}
                selected={animal === AnimalData.animalData[animal]}
                onClick={(e) => handleAnimalSelectBtnClick(e)}
              >
                {animal}
              </AnimalBtn>
            )
          })}
    </BtnContainer>
  )
}

const BtnContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`

const AnimalBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px #dbdbdb;
  border-radius: 20px;
  padding: 14px 22px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  ${({ selected }) =>
    selected === true &&
    `    background-color: #fbf3da;
`}
`
