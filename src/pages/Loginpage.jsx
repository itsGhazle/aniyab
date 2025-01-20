import React from "react";
import styled from "styled-components";
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background: var(--White);
  margin: 2rem auto;
  width: 20%;
  height: 25rem;
  gap: 2rem;
  border-radius: 0.75rem;
`;
const Input = styled.input`
  padding: 0.5rem 0.875rem;
  border: 1px solid var(--Border-Dark);
  border-radius: 0.5rem;
  &:focus {
    outline: none;
    border: 1px solid var(--Brand-Primary-Main);
  }
`;
const Button = styled.button`
  display: inline-flex;
  border-radius: 0.75rem;
  color: var(--Brand-Primary-Main);
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.75rem;
  padding: 0.625rem;
  border: 1px solid var(--Text-Tertiary);
  align-self: flex-end;
  &:hover {
    border: 1px solid var(--Brand-Primary-Main);
  }
`;
const H1 = styled.h1`
  color: var(--Text-Title);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.5rem; /* 166.667% */
`;
export default function Loginpage() {
  return (
    <Main>
      <H1>ورود/ثبت نام</H1>
      <label htmlFor="">شماره موبایل / کد ملی / نام کاربری </label>
      <Input type="text" autoFocus />
      <Button>
        <img src="public/Login.svg" alt="" />
        <span>ورود یا ثبتنام</span>
      </Button>
    </Main>
  );
}
