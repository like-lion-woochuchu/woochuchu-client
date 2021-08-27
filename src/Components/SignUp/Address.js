import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components/macro'
import searchIcon from 'Assets/Icon/icon-search@2x.png'
import { SignUpInput, SubjectText } from './SignUpLayout'

const Address = () => {
  const el = useRef()
  const [address, setAddress] = useState('')
  const [detailAddress, setDetailAddress] = useState('')
  const [detailAddressArea, setDetailAddressArea] = useState(false)

  const unfold = () => setDetailAddressArea(true)
  const fold = (e) => {
    if (detailAddressArea && (!el.current || !el.current.contains(e.target))) {
      setDetailAddressArea(false)
    }
  }
  useEffect(() => {
    window.addEventListener('click', fold)
    return () => {
      window.removeEventListener('click', fold)
    }
  }, [])

  return (
    <>
      <AddressDiv
        ref={el}
        detail={detailAddressArea}
        onClick={unfold}
        onMouseOver={unfold}
      >
        <SubjectText>주소</SubjectText>
        <SignUpInput
          width={'400px'}
          readOnly={true}
          value={address}
          placeholder={'서울특별시 동대문구 이문로 107'}
        />
        <SearchIcon onClick={(e) => console.log(e)} />
        {detailAddressArea ? (
          <SignUpInput
            width={'400px'}
            margin={'20px 0px 0px 67px'}
            placeholder={'상세주소'}
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          />
        ) : null}
      </AddressDiv>
    </>
  )
}

const AddressDiv = styled.div`
  margin-top: 20px;
  padding: 30px 50px;
  width: 640px;
  height: ${(props) => (props.detail ? '130px' : '86px')};
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  opacity: 1;
`

const SearchIcon = styled.img.attrs({
  src: searchIcon,
})`
  margin-left: 54px;
  width: 19px;
  height: 19px;
`

export default Address
