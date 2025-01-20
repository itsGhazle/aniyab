/* eslint-disable react/prop-types */

import styled from "styled-components";
import Comment from "./Comment";
import ResponseToComment from "./ResponseToComment";

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(3, auto);

  row-gap: 2rem;
  margin-bottom: 1rem;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;
const TextArea = styled.textarea`
  padding: 0.5rem 0.875rem;
  border-radius: 0.5rem;
  border: 1px solid var(--Border-Dark);
  background: var(--White);
  box-shadow: var(--shadow-xs);
  flex: 1;

  &:focus {
    outline: none;
  }
`;
const Span = styled.span`
  color: var(--Text-Secondary, #737373);
  text-align: right;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 200% */
`;
const Button = styled.button`
  padding: 0rem 0.5rem;
  color: var(--Text-Disable);
  text-align: right;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 200% */
  border-radius: 0.75rem;
  background: var(--BG-dark);
  align-self: end;
`;

function NewComment({ header }) {
  return (
    <>
      <h1>{header}</h1>
      <Form>
        <Div>
          <label htmlFor="">دیدگاهی در مورد این مطلب دارید؟</label>
          <div className="h-32 flex">
            <TextArea type="text" placeholder="نام خود را وارد نمایید" />
          </div>
          <Span>حداکثر ۳۰۰ کاراکتر</Span>
          <Button>ثبت دیدگاه </Button>{" "}
        </Div>
        <Comment />
        <ResponseToComment />
      </Form>
    </>
  );
}

export default NewComment;
