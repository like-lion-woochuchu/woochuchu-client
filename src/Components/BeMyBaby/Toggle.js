import React from 'react'
import styled from 'styled-components/macro'

export default function Toggle({ animalList, animal, setAnimal }) {
  const toggleHandler = (e) => {
    if (animal.includes(e.target.innerHTML)) {
      setAnimal((prev) =>
        prev.filter((animal) => animal !== e.target.innerHTML)
      )
      return
    }
    setAnimal((prev) => [...prev, e.target.innerHTML])
  }
  //   const [isToggle, setIsToggle] = useState(false)
  //   const [toggledLists, setToggledLists] = useState([])

  //   const toggleHandler = (toggled, id) => {
  //     if (toggled) {
  //       setToggledLists([...toggledLists, id])
  //     } else {
  //       setToggledLists(toggledLists.filter((el) => el !== id))
  //     }
  //   }
  return (
    <ToggleDivWrap>
      {animalList.map((an, idx) => {
        return (
          <Button
            key={idx}
            selected={animal.includes(an)}
            onClick={(e) => toggleHandler(e)}
          >
            {an}
          </Button>
        )
      })}
    </ToggleDivWrap>
  )
}

const ToggleDivWrap = styled.div`
  margin: 80px 0;
  display: flex;
  justify-content: space-between;
`

// const ToggleButtonWrap = styled.div`
//   top: 319px;
//   left: 625px;
//   width: 100px;
//   height: 50px;
//   margin: 0 10px;
//   text-align: center;
//   border: ${(props) => (props.isToggle ? 'none' : '0.2px solid #707070')};
//   border-radius: 20px;
//   opacity: 1;
//   background-color: ${(props) => (props.isToggle ? '#fbf3da' : 'none')};
// `

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px #dbdbdb;
  border-radius: 20px;
  padding: 14px 22px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  ${({ selected }) => selected === true && `background-color: #fbf3da;`}
`

// const TextInToggleButton = styled.p`
//   margin-top: 13%;
//   text-align: center;
//   font: normal normal medium 16px/24px Noto Sans CJK KR;
//   letter-spacing: 0px;
//   color: ${(props) => (props.isToggle ? '#1d1e20' : '#707070')};
//   opacity: 1;
// `
