import { useState, useRef, useEffect } from 'react'
import DaumPostcode from 'react-daum-postcode'
import styled from 'styled-components/macro'
import searchIcon from 'Assets/Icon/icon-search@2x.png'
import { SignUpInput, SubjectText, ErrorMessage } from './SignUpLayout'

const Address = (props) => {
  const el = useRef()
  const [detailAddressArea, setDetailAddressArea] = useState(false)
  const [modal, setModal] = useState(false)

  const unfold = () => setDetailAddressArea(true)
  const fold = (e) => {
    if (detailAddressArea && (!el.current || !el.current.contains(e.target))) {
      setDetailAddressArea(false)
    }
  }
  const toggle = () => setModal(!modal)

  const handleAddress = (data) => {
    props.setAddress(data.address)
    setModal(false)
  }
  useEffect(() => {
    window.addEventListener('click', fold)

    return () => {
      window.removeEventListener('click', fold)
    }
  }, [fold])

  return (
    <>
      <AddressDiv
        ref={el}
        detail={detailAddressArea}
        onClick={unfold}
        onMouseOver={unfold}
        error={props.error}
      >
        <SubjectText>주소</SubjectText>
        <SignUpInput
          width={'400px'}
          readOnly={true}
          placeholder={'서울특별시 동대문구 이문로 107'}
          onClick={() => setModal(toggle)}
          value={props.address}
        />
        <SearchIcon onClick={toggle} />
        {modal ? (
          <DaumPostcode
            onComplete={handleAddress}
            autoClose
            width={505}
            height={420}
            style={{
              position: 'absolute',
              zIndex: '100',
              border: '1px solid #333333',
            }}
          />
        ) : null}
        {detailAddressArea ? (
          <SignUpInput
            width={'400px'}
            margin={'20px 0px 0px 67px'}
            placeholder={'상세주소'}
            value={props.detailAddress}
            onChange={(e) => props.setDetailAddress(e.target.value)}
          />
        ) : null}
        {props.error ? <ErrorMessage>{props.error}</ErrorMessage> : null}
      </AddressDiv>
    </>
  )
}

const AddressDiv = styled.div`
  margin-bottom: 50px;
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
