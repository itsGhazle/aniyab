import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
const StyledBreadCrumb = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;
const ActiveLink = styled(Link)`
  color: var(--Brand-Primary-Main);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 200% */
`;
const StyledLink = styled(Link)`
  color: var(--Text-Main);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 200% */
`;
export default function BreadCrumb() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <StyledBreadCrumb>
      <ActiveLink to={"/"}>خانه</ActiveLink>
      <span>
        {" "}
        <img src="/Line%201.svg" />{" "}
      </span>
      <StyledLink to={location.pathname}> وبلاگ</StyledLink>{" "}
    </StyledBreadCrumb>
  );
}
