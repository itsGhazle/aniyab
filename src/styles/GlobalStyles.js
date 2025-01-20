import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --Brand-Primary-Dark:#022251;
    --Brand-Primary-Main:#002D71;
    --Brand-Secondary-Dark: #ed5904;
    --Brand-Primary-Paler: #ebf1fb;
    --Brand-Primary-Main: #002d71;
    --Brand-Primary-Light: #0545a6;
    --Brand-Secondary-Light: #ff843c;
    --Text-Title: #302e2e;
    --Text-Secondary: #737373;
    --Text-Main: #404040;
    --Text-Contrast: #fff;
    --Text-Disable: #BBBAB9;
    --Text-Tertiary: #A3A3A3;
    --White: #FFF;
    --BG-White: #fff;
    --BG-dark: #F4F4F5;
    --Border-Dark: #D6D3D1;
    --Border-Light: #e7e5e4;
    
    
    /* Shadow/xs */
    --shadow-xs:0px 1px 2px 0px rgba(10, 13, 18, 0.05) ;



}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
  direction: rtl;
  color: var(--color-light--2);
  font-weight: 400;
  line-height: 1.6;
  background: #fafafa;
  background-position: top right, 0px 500px;
  background-image: url("public/large bg.png"),
    url("public/large bg-rotate.png");
  background-repeat: no-repeat;
}
`;
export default GlobalStyles;
