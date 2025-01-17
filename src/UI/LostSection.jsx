import { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 10rem 3rem 10rem;
  background: rgba(255, 255, 255, 0.4);
  border: 2px solid var(--BG-White);
  border-radius: 0.75rem;
  backdrop-filter: blur(12px);
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    width: 20.5rem;
    margin: 0 auto;
    padding: 1.25rem 1rem 2rem 1rem;
  }
`;
const Heading = styled.h1`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.5rem;
  color: var(--Text-Title);
  text-align: center;
`;
const Text = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
  color: var(--Text-Secondary);
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  width: 100%;
  gap: 0.625rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Input = styled.textarea`
  height: 3rem;
  padding: 0.5rem 0.875rem;
  position: relative;
  flex: 1;
  border-radius: 0.5rem;
  border: 1px solid var(--Border-Dark, #d6d3d1);
  background: var(--White, #fff);
  box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05);
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  padding: 0.625rem 1.125rem;
  border-radius: 0.75rem;
  background: var(--Brand-Primary-Main);
  color: var(--Text-Contrast);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.75rem;
`;
const Img = styled.img`
  position: absolute;
  /* width: 0.875rem;
  height: 0.875rem; */
  padding-left: 0.5rem;
`;
function LostSection() {
  const [value, setValue] = useState();
  function handleClick() {
    setValue("");
  }
  return (
    <Section>
      <Heading>گمشده ای دارید؟</Heading>
      <Text>
        با جست‌وجو در بانک مدارک و اشیای گم‌شدهٔ آنی‌یاب، ممکن است گم‌شدهٔ خود
        را پیدا کنید
      </Text>
      <Form>
        <Input
          placeholder="جست‌وجوی کد ملی، کد آنی‌یاب یا سریال سخت‌افزاری گوشی موبایل"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></Input>
        <Img src="/search1.svg" alt="" />
        <Button onClick={handleClick}>جست و جو</Button>
      </Form>
    </Section>
  );
}

export default LostSection;
