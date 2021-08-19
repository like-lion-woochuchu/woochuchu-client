import React from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import Header from 'Layout/Header'
import Footer from 'Layout/Footer'
import { theme } from 'Styles/Theme'

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </ThemeProvider>
  )
}

const StyledMain = styled.main.attrs(() => ({
  minHeight: 'calc(100vh - 160px)',
}))`
  display: flex;
  justify-content: center;
  width: 100%;
  background: url('https://ifh.cc/g/ukX6Av.png');
  background-size: cover;
  min-height: ${({ minHeight }) => minHeight};
  padding-top: ${({ paddingTop }) => paddingTop};
  @media screen and ${({ theme }) => theme.device.tablet} {
    padding-top: ${({ tabletPaddingTop }) => tabletPaddingTop};
  }
`
