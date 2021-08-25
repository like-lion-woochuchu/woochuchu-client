import { useState } from 'react'
import styled from 'styled-components/macro'
import searchIcon from 'Assets/Icon/icon-search@2x.png'

const SignUpInput = () => {
  const [address, setAddress] = useState('')
  const [detailAddress, setDetailAddress] = useState('')
  const [detailAddressArea, setDetailAddressArea] = useState(false)

  const unfold = () => setDetailAddressArea(true)
  const fold = () => setDetailAddressArea(false)

  return (
    <>
      <SignUpInputArea>
        <AddressDiv
          detail={detailAddressArea}
          onClick={unfold}
          onMouseOver={unfold}
          onMouseLeave={fold}
        >
          <AddressText>주소</AddressText>
          <Address
            readOnly={true}
            placeholder={'서울특별시 동대문구 이문로 107'}
          />
          <SearchIcon onClick={(e) => console.log(e)} />
          {detailAddressArea ? (
            <DetailAddress
              placeholder={'상세주소'}
              onChange={(e) => setDetailAddress(e.target.value)}
            />
          ) : null}
        </AddressDiv>
      </SignUpInputArea>
    </>
  )
}

const SignUpInputArea = styled.div`
  margin-top: 40px;
  margin-left: 30px;
  width: 640px;
  height: 742px;
`

const AddressDiv = styled.div`
  margin-top: 330px;
  padding: 30px 50px;
  width: 640px;
  height: ${(props) => (props.detail ? '130px' : '86px')};
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  opacity: 1;
`

const AddressText = styled.text`
  margin-right: 30px;
  font: normal normal bold 18px/26px Noto Sans CJK KR;
  text-align: left;
  letter-spacing: 0px;
  color: #1d1e20;
  opacity: 1;
`

const Address = styled.input`
  width: 400px;
  height: 26px;
  text-align: left;
  font: normal normal 300 18px/26px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
`
const SearchIcon = styled.img.attrs({
  src: searchIcon,
})`
  margin-left: 54px;
  width: 19px;
  height: 19px;
`

const DetailAddress = styled.input`
  margin-top: 20px;
  margin-left: 67px;
  text-align: left;
  font: normal normal 300 18px/26px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  ::placeholder {
    font: normal normal 300 18px/26px Noto Sans CJK KR;
    letter-spacing: 0px;
    color: #dedede;
  }
`
export default SignUpInput
