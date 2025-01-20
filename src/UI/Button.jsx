/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 0rem 0.5rem;
  align-items: center;
  padding: 0.625rem;
  border-radius: 0.75rem;
  text-align: right;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 200% */
  border-radius: 0.75rem;

  ${(props) =>
    props.width === "width" &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.type === "primary" &&
    css`
      background: var(--Brand-Primary-Main);
      color: var(--Text-Contrast, #fff);
    `}
  ${(props) =>
    props.type === "outline" &&
    css`
      color: var(--Brand-Primary-Main);
      border: 1px solid var(--Brand-Primary-Main);
    `}
    ${(props) =>
    props.type === "neutral" &&
    css`
      color: var(--Text-Main);
      border: 1px solid var(--Text-Tertiary);
    `}
    ${(props) =>
    props.type === "text" &&
    css`
      color: var(--Brand-Primary-Main);
    `}
`;
function Button({ children, type, width, disabled, to, onClick }) {
  const base =
    " text-sm font-medium h-10 px-2 py-1.5  justify-center items-center inline-flex gap-2.5	";
  const styles = {
    servicesButton:
      base +
      "h-12 p-2.5 bg-white rounded-xl justify-center items-center inline-flex",
    paginationButton:
      " border-0 rounded-sm font-medium text-[1.4rem] flex items-center justify-center gap-[0.4rem] py-[0.6rem] px-[1.2rem] transition-all duration-300 hover:bg-[var(--color-brand-600)] hover:text-[var(--color-brand-50)] hover:disabled:bg-inherit",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <StyledButton
      disabled={disabled}
      type={type}
      onClick={onClick}
      width={width}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
