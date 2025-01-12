/* eslint-disable react/prop-types */

import styled from "styled-components";
// import { useSearchParams } from "react-router-dom";

const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const PaginationButton = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  margin: 0.6rem 1.2rem;
  transition: all 0.3s;
  &:hover {
    border-bottom: 1px solid #000;
  }
  &:disabled {
    color: #bbbab9;
  }
`;
const PaginationImg = styled.img``;
function Pagination({ count }) {
  // const [serachParams, setSearchParams] = useSearchParams();

  return (
    <>
      <StyledPagination>
        <PaginationButton>
          <PaginationImg src="public/Property 1=Default (1).svg" alt="" />
        </PaginationButton>
        <p>
          <span>1</span> تا <span>10</span> از <span>{count}</span>
        </p>
        <PaginationButton>
          <PaginationImg src="public/Property 1=Default.svg" alt="" />
        </PaginationButton>
      </StyledPagination>
    </>
  );
}

export default Pagination;
