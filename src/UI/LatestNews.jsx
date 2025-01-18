/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  justify-items: center;
`;
const BlogPostPrimary = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: span 3;
`;
const BlogPostSecondary = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1.25rem;
  justify-content: center;
  &:hover {
    H2 {
      color: var(--Brand-Primary-Dark);
      cursor: pointer;
    }
    Span {
      display: block;
    }
  }
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
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
`;
const P = styled.p`
  color: var(--Text-Main);
  text-align: right;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 200% */
  margin-bottom: 1.25rem;
`;
const Date = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--Text-Secondary);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 200% */
  margin-top: 1.25rem;
`;
const Span = styled.span`
  display: none;
`;
function LatestNews() {
  return (
    <>
      <Section>
        <BlogPostPrimary>
          <img src="/blogPost.png" alt="" />
          <div>
            <Date>
              <span>انتشار: ۱۲ خرداد ۱۴۰۳</span>
            </Date>
            <H2>پیگیری کارت های سوخت جامانده توسط سامانه آنی یاب</H2>
            <P>
              سوال مهمی که برای افراد وجود دارد این است که نحوه ورود به سامانه و
              پیگیری کارت سوخت جامانده از طریق آنی یاب چگونه است؟
            </P>
            <StyledLink>کارت سوخت</StyledLink>
            <StyledLink>پیگیری گم شده</StyledLink>
            <StyledLink>یه تگ دیگه </StyledLink>
          </div>
        </BlogPostPrimary>

        <BlogPostSecondary>
          <img src="/blogPostSecondary.png" alt="" />
          <div>
            <Date>
              <span>انتشار: ۱۲ خرداد ۱۴۰۳</span>
              <Span>
                <img src="/Left-indigo.svg" alt="" />
              </Span>
            </Date>
            <H2>پیگیری کارت های سوخت جامانده توسط سامانه آنی یاب</H2>
            <P>
              سوال مهمی که برای افراد وجود دارد این است که نحوه ورود به سامانه و
              پیگیری کارت سوخت جامانده از طریق آنی یاب چگونه است؟
            </P>
            <StyledLink>کارت سوخت</StyledLink>
            <StyledLink>پیگیری گم شده</StyledLink>
            <StyledLink>یه تگ دیگه </StyledLink>
          </div>
        </BlogPostSecondary>
        <BlogPostSecondary>
          <img src="/blogPostSecondary.png" alt="" />
          <div>
            <Date>انتشار: ۱۲ خرداد ۱۴۰۳</Date>
            <H2>پیگیری کارت های سوخت جامانده توسط سامانه آنی یاب</H2>
            <P>
              سوال مهمی که برای افراد وجود دارد این است که نحوه ورود به سامانه و
              پیگیری کارت سوخت جامانده از طریق آنی یاب چگونه است؟
            </P>
          </div>
        </BlogPostSecondary>
        <BlogPostSecondary>
          <img src="/blogPostSecondary.png" alt="" />
          <div>
            <Date>انتشار: ۱۲ خرداد ۱۴۰۳</Date>
            <H2>پیگیری کارت های سوخت جامانده توسط سامانه آنی یاب</H2>
            <P>
              سوال مهمی که برای افراد وجود دارد این است که نحوه ورود به سامانه و
              پیگیری کارت سوخت جامانده از طریق آنی یاب چگونه است؟
            </P>
          </div>
        </BlogPostSecondary>
      </Section>
    </>
  );
}

export default LatestNews;
