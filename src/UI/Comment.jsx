/* eslint-disable react/prop-types */

import styled from "styled-components";
import Button from "./Button";

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
    & > div:nth-child(1) {
    grid-column: span 2;
  }

  & > div:nth-child(2),
  & > div:nth-child(3) {
    grid-column: span 1; 
  }

  & > div:nth-child(4),
  & > div:nth-child(5) {
    grid-column: span 2; 
  }
  row-gap: 1rem;
  column-gap: 1rem;
  margin-bottom: 1rem;

`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 0.5rem 0.875rem;
  border: 1px solid var(--Border-Dark);
  border-radius: 0.5rem;
  &:focus {
    outline: none;
  }
`;
function Comment({ header }) {
  return (
    <>
      <h1>{header}</h1>
      <Form>
        <Div>
          <label htmlFor="">نام:</label>
          <Input type="text" placeholder="نام خود را وارد نمایید" />
        </Div>
        <Div>
          <label htmlFor="">شماره تماس</label>
          <Input type="text" placeholder="شماره تماس خود را وارد نمایید" />
        </Div>
        <Div>
          <label htmlFor="">ایمیل</label>
          <Input type="text" placeholder="ایمیل خود را وارد نمایید" />
        </Div>
        <Div>
          <label htmlFor="">وب سایت</label>
          <Input
            type="text"
            placeholder="درصورت تمایل وب سایت خود را وارد نمایید"
          />
        </Div>
        <Div>
          <label htmlFor="">متن</label>
          <Input type="text" placeholder="پیام خود را وارد نمایید" />
        </Div>
      </Form>
      <Button type="Tertiary">ارسال پیام</Button>
    </>
  );
}

export default Comment;
