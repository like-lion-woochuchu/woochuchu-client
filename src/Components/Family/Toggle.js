import React, { useState } from 'react'
import styled from 'styled-components/macro'

const ToggleDivWrap = styled.div`
  margin: 80px 0;
  display: flex;
  justify-content: center;
`

const ToggleButtonWrap = styled.div`
  top: 319px;
  left: 625px;
  width: 100px;
  height: 50px;
  margin: 0 10px;

  border: ${(props) => (props.isToggle ? 'none' : '0.2px solid #707070')};
  border-radius: 20px;
  opacity: 1;
  background-color: ${(props) => (props.isToggle ? '#fbf3da' : 'none')};
`

const TextInToggleButton = styled.p`
  margin-top: 13%;
  text-align: center;
  font: normal normal medium 16px/24px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: ${(props) => (props.isToggle ? '#1d1e20' : '#707070')};
  opacity: 1;
`

const animal_list = [
  {
    id: '1',
    name: '강아지',
  },
  {
    id: '2',
    name: '고양이',
  },
  {
    id: '3',
    name: '새',
  },
  {
    id: '4',
    name: '오리',
  },
  {
    id: '5',
    name: '물고기',
  },
  {
    id: '6',
    name: '...',
  },
]
const Toggle = () => {
  const [isToggle, setIsToggle] = useState(false)
  const [toggledLists, setToggledLists] = useState([])

  const toggleHandler = (toggled, id) => {
    if (toggled) {
      setToggledLists([...toggledLists, id])
      console.log(isToggle === true)
      console.log(toggledLists)
    } else {
      setToggledLists(toggledLists.filter((el) => el !== id))
      console.log(isToggle === true)
      console.log(toggledLists)
    }
  }
  return (
    <ToggleDivWrap>
      {animal_list.map((animal, props) => (
        <ToggleButtonWrap
          key={animal.id}
          isToggle={isToggle}
          onClick={(e) => {
            setIsToggle((isToggle) => !isToggle)
            toggleHandler(e.currentTarget.isToggle, animal.id)
          }}
        >
          <TextInToggleButton>{animal.name}</TextInToggleButton>
        </ToggleButtonWrap>
      ))}
    </ToggleDivWrap>
  )
}

export default Toggle
