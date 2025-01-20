/* eslint-disable react/prop-types */

import styled from "styled-components";
import LatestNews from "../UI/LatestNews";
import Pagination from "../UI/Pagination";
import { Link, useLocation } from "react-router-dom";
import Card from "../UI/Card";
import BreadCrumb from "../UI/BreadCrumb";

const Main = styled.main`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(5, auto);
  grid-row-gap: 2rem;
  padding: 2rem 5rem;
`;
const StyledLink = styled(Link)`
  display: inline-flex;
  flex-direction: row;
  gap: 0.5rem;
  color: var(--Text-Title);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.5rem; /* 166.667% */
`;
const P = styled.p`
  color: var(--Text-Secondary);
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
`;
function Blog({ image, title, description, date }) {
  return (
    <Main>
      <BreadCrumb />
      <header>
        <StyledLink>
          <img src="/Right 1.svg" alt="" /> <span>وبلاگ آنی یاب</span>
        </StyledLink>
        <P>
          آخرین اخبار مربوط به مدارک و اسناد و هرچی باید بیشتر به متنش فکر کنم
        </P>
      </header>
      <LatestNews />

      <Card />
      <Pagination count={15} />
    </Main>
  );
}

export default Blog;
