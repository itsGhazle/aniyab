import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Main = styled.main`
  display: flex;
  width: 100%;
  gap: 2rem;
`;
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1.625rem;
  border-radius: 0.75rem;
  border: 1px solid var(--Border-Light);
  width: 380px;
  height: 479px;
  img {
    width: 21.75rem;
    height: 16.4375rem;
  }
`;
const CardDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;
const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0rem 0.25rem 0rem 0.5rem;
  border-radius: 0.75rem;
  background: var(--Brand-Primary-Paler);
  color: var(--Brand-Primary-Main);
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0 0.25rem;
`;
const H2 = styled.h2`
  color: var(--Text-Title);
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
`;
const P = styled.p`
  color: var(--Text-Main);
  text-align: right;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 200% */
`;
const Date = styled.p`
  color: var(--Text-Secondary);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 200% */
`;
const Title = styled.h2`
  color: var(--Text-Title);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.5rem; /* 166.667% */
`;
function Card() {
  return (
    <>
      <Title>همه مطالب</Title>
      <Main>
        <StyledCard>
          <img src="/Card.png" alt="" />
          <CardDescription>
            <Date>انتشار: ۱۲ خرداد ۱۴۰۳</Date>
            <H2>پیگیری کارت های سوخت جامانده توسط سامانه آنی یاب</H2>
            <P>
              سوال مهمی که برای افراد وجود دارد این است که نحوه ورود به سامانه و
              پیگیری کارت سوخت جامانده از طریق آنی یاب چگونه است؟
            </P>
            <div>
              <StyledLink>کارت سوخت</StyledLink>
              <StyledLink>پیگیری گم شده</StyledLink>
              <StyledLink>یه تگ دیگه </StyledLink>
            </div>
          </CardDescription>
        </StyledCard>
      </Main>
    </>
  );
}

export default Card;
