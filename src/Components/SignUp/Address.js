import { useState, useRef, useEffect } from 'react'
import DaumPostcode from 'react-daum-postcode'
import styled from 'styled-components/macro'
import searchIcon from 'Assets/Icon/icon-search@2x.png'
import { SignUpInput, SubjectText } from './SignUpLayout'

const Address = () => {
  const el = useRef()
  const [address, setAddress] = useState('')
  const [detailAddress, setDetailAddress] = useState('')
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
    let AllAddress = data.address
    let extraAddress = ''

    if (data.addressType === 'R') {
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
        extraAddress += data.bname
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? ', ' + data.buildingName : data.buildingName
      }
      AllAddress += extraAddress !== '' ? `(${extraAddress})` : ''
    }
    setAddress(AllAddress)
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
      >
        <SubjectText>주소</SubjectText>
        <SignUpInput
          width={'400px'}
          readOnly={true}
          value={address}
          placeholder={'서울특별시 동대문구 이문로 107'}
        />
        <SearchIcon onClick={toggle} />
        {modal ? (
          <DaumPostcode
            onComplete={handleAddress}
            autoClose
            onMouseLeave={(e) => setModal(false)}
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
