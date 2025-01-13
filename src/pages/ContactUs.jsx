import styled from "styled-components";
import Button from "../UI/Button";

const Header = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
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
const TextArea = styled.textarea`
  padding: 0.5rem 0.875rem;
  border: 1px solid var(--Border-Dark);
  border-radius: 0.5rem;
  &:focus {
    outline: none;
  }
`;
function ContactUs() {
  return (
    <div>
      <Header>  <span>تماس با ما</span>
      <p>پیشنهادات ، انتقادات و نظرات خود را با ما درمیان بگذارید.</p>
      </Header>
      <div>
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
          <label htmlFor="">موضوع </label>
          <Input
            type="text"
            placeholder="درصورت تمایل وب سایت خود را وارد نمایید"
          />
        </Div>
        <Div>
          <label htmlFor="">سوال خود را با جزئیات توضیح دهید:</label>
          <TextArea type="text" rows="4" placeholder="پیام خود را وارد نمایید">
        </TextArea> </Div>
      </Form>
      <Button type="Tertiary">ارسال پیام</Button>
    </div>
    </div>
  );
}

export default ContactUs;
