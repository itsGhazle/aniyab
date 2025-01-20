import React from "react";
import styled from "styled-components";
const Button = styled.button`
  display: inline-flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid var(--Text-Tertiary);
  align-self: center;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;
const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export default function Comment() {
  return (
    <Main>
      <Section>
        <Profile>
          <img src="/avatar.svg" alt="" />
          <Div>
            <p>کاربر آنی‌یاب</p>
            <p>۱۲ خرداد ۱۴۰۳</p>
          </Div>
        </Profile>
        <Button>
          <span>
            <img src="/Reply.svg" alt="" />
          </span>
          پاسخ
        </Button>
      </Section>

      <p>
        سوال مهمی که برای افراد وجود دارد این است که نحوه ورود به سامانه و
        پیگیری کارت سوخت جامانده از طریق آنی یاب چگونه است؟
      </p>
    </Main>
  );
}
