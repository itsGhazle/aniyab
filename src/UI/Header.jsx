import styled from "styled-components";
import Button from "./Button";
const H1 = styled.h1`
  color: var(--Brand-Primary-Dark, #022251);
  text-align: right;
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.75rem; /* 125% */
  // Media query for screen sizes smaller than 480px
  @media (max-width: 768px) {
    font-size: 1.75rem;
    line-height: 2.75rem; /* 157.143% */
  }
`;
const H2 = styled.h2`
  color: var(--Text-Main, #404040);
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem;
  @media (max-width: 480px) {
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 0rem 1.5rem;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    gap: 1rem;
    margin: 1rem 0;
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;
const Img = styled.img`
  grid-row: span 2;
`;
const ButtonGroup = styled.div`
  display: flex;
  padding: 0.75rem 0rem;
  justify-self: flex-start;
  align-items: baseline;
  gap: 0.5rem;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
function Header() {
  return (
    <div>
      <Main>
        <Section>
          <H1>
            با آنی یاب،
            <br /> همه چیز پیدا می شود
          </H1>
          <H2>
            با خرید و نصب برچسب‌های هوشمند آنی‌یاب روی مدارک و اشیای مهم و
            ارزش‌مند، دیگر نگران گم شدن آن‌ها نباشید.
          </H2>
        </Section>

        <Img src="public/Hero visuals.png" alt="" />
        <ButtonGroup>
          <Button type="primary">
            خرید برچسب هوشمند
            <img src="public/Left 1.svg" alt="" />
          </Button>
          <Button type="outline">
            اعلام گمشده
            <img src="public/ads.svg" alt="" />
          </Button>
        </ButtonGroup>
      </Main>
    </div>
  );
}

export default Header;
