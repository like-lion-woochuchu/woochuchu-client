import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 100;
    src: url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2') format('woff2'),
    url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff') format('woff'),
    url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf') format('opentype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    src: url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2') format('woff2'),
    url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff') format('woff'),
    url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf') format('opentype');
  }

  @font-face {font-family: 'Noto Sans KR';
    font-style: normal;font-weight: 400;
    src: url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2') format('woff2'),
    url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff') format('woff'),
    url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf') format('opentype');
  } 

  @font-face {font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src: url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2') format('woff2'),
    url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff') format('woff'),
    url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf') format('opentype');
  } 

  @font-face {font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src: url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2') format('woff2'),
    url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff') format('woff'),
    url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf') format('opentype');
  } 

  @font-face {font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    src: url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff2') format('woff2'),
    url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff') format('woff'),
    url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf') format('opentype');
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;  
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    line-height: 1.43;
    color: #484848;
    background-color: #fff;
  }
  
  a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  ol, ul, li {
    list-style: none;
  }

  img {
    width: 100%;
  }
`

export default GlobalStyle
