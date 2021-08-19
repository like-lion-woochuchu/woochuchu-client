import React from 'react'
import styled from 'styled-components/macro'
import logoImgUrl from 'Assets/Images/Logo/footer-simplified-logo@2x.png'

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Contents>
          <div>
            <Menus>
              <Logo src={logoImgUrl} alt="logo" />
            </Menus>
            <Menus>woochuchu@gmail.com</Menus>
          </div>
        </Contents>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 160px;
  border-top: solid 0.3px #dedede;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
`

const Contents = styled.div`
  display: flex;
  align-items: center;
`

const Menus = styled.li`
  display: flex;
  align-items: center;
  margin-left: 50px;
`
const Logo = styled.img`
  width: 116px;
  height: 14px;
  margin-bottom: 10px;
`
