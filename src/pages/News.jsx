import styled from "styled-components";
import NewComment from "../UI/NewComment.jsx";
import { Link } from "react-router-dom";
const Main = styled.main`
  display: grid;
  grid-template-rows: repeat(3, auto);
  justify-content: center;
  justify-items: center;
  gap: 2rem;
`;
const H1 = styled.h1`
  color: var(--Text-Title);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 166.667% */
`;
const Date = styled.span`
  color: var(--Text-Secondary);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
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
const Section = styled.section`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  padding: 1.5rem 7.5rem;
  width: 85.375rem;
`;
const Summary = styled.div`
  border-right: 4px solid var(--Brand-Primary-Lighter, #3974cd);
  background: var(--Brand-Primary-Paler, #ebf1fb);
  padding: 1rem;
`;
const TableOfContent = styled.div`
  display: flex;
  width: 19.25rem;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--Border-Light, #e7e5e4);
`;
const H2 = styled.h2`
  color: var(--Text-Title);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.25rem; /* 180% */
`;
const BodySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
function News() {
  return (
    <Main>
      <div>
        <H1>پیگیری کارت های سوخت جامانده توسط سامانه آنی یاب</H1>
        <Date>انتشار: ۱۲ خرداد ۱۴۰۳</Date>
        <StyledLink>کارت سوخت</StyledLink>
        <StyledLink>پیگیری گم شده</StyledLink>
        <StyledLink>یه تگ دیگه </StyledLink>
      </div>
      <img src="/Card.png" alt="" />
      <Section>
        <BodySection>
          <H2>عنوان دوم</H2>
          <Summary>
            این سامانه، سامانه پیگیری کارت سوخت جامانده به نشانی اینترنتی
            https://gts.niopdc.ir/ می باشد و با توجه به اطلاعیه های منتشر شده،
            مدیر سامانه هوشمند کارت سوخت اعلام کرد که جستجوی کارت سوخت جامانده
            مردم از طریق سایت کارت سوخت جامانده scs.niopdc.ir قابل پیگیری می
            باشد.
          </Summary>
          <p>
            این سامانه، سامانه پیگیری کارت سوخت جامانده به نشانی اینترنتی
            https://gts.niopdc.ir/ می باشد و با توجه به اطلاعیه های منتشر شده،
            مدیر سامانه هوشمند کارت سوخت اعلام کرد که جستجوی کارت سوخت جامانده
            مردم از طریق سایت کارت سوخت جامانده scs.niopdc.ir قابل پیگیری می
            باشد. این سامانه، سامانه پیگیری کارت سوخت جامانده به نشانی اینترنتی
            https://gts.niopdc.ir/ می باشد و با توجه به اطلاعیه های منتشر شده،
            مدیر سامانه هوشمند کارت سوخت اعلام کرد که جستجوی کارت سوخت جامانده
            مردم از طریق سایت کارت سوخت جامانده scs.niopdc.ir قابل پیگیری می
            باشد. این سامانه، سامانه پیگیری کارت سوخت جامانده به نشانی اینترنتی
            https://gts.niopdc.ir/ می باشد و با توجه به اطلاعیه های منتشر شده،
            مدیر سامانه هوشمند کارت سوخت اعلام کرد که جستجوی کارت سوخت جامانده
            مردم از طریق سایت کارت سوخت جامانده scs.niopdc.ir قابل پیگیری می
            باشد. این سامانه، سامانه پیگیری کارت سوخت جامانده به نشانی اینترنتی
            https://gts.niopdc.ir/ می باشد و با توجه به اطلاعیه های منتشر شده،
            مدیر سامانه هوشمند کارت سوخت اعلام کرد که جستجوی کارت سوخت جامانده
            مردم از طریق سایت کارت سوخت جامانده scs.niopdc.ir قابل پیگیری می
            باشد.
          </p>
          <NewComment
              header={
                "آدرس ایمیل و شماره تماس شما منتشر نخواهد شد. فیلدهای مورد نیاز علامت گذاری شده است"
              }
          />
        </BodySection>
        <section>
          <TableOfContent>عنوان دوم H2</TableOfContent>
        </section>
      </Section>

    </Main>
  );
}

export default News;
