import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 1.75rem 0rem 0rem;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  border-right: 2px solid var(--Border-Light, #e7e5e4);
  padding-right: 1.5rem;
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
export default function ResponseToComment() {
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

        <p>
          سوال مهمی که برای افراد وجود دارد این است که نحوه ورود به سامانه و
          پیگیری کارت سوخت جامانده از طریق آنی یاب چگونه است؟
        </p>
      </Section>
    </Main>
  );
}
