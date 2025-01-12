import { Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 4.5rem;
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;
const SelectMenu = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  position: relative;
  padding: 0.5rem;
  text-align: center;
  &:hover {
    border-bottom: 2px solid var(--Brand-Secondary-Dark);
    color: var(--Brand-Secondary-Dark);
    cursor: pointer;
  }
  &:hover > div {
    visibility: visible;
    opacity: 1;
    color: var(--Text-Main);
  }
  &:focus-visible {
    outline: none;
  }
`;
const DropList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.25rem 0.5rem;
  gap: 0.5rem;
  width: 12.875rem;
  border-radius: 0.75rem;
  background: var(--BG-White, #fff);
  box-shadow: 0px 4px 12px 0px rgba(163, 163, 163, 0.25);
  margin-top: 1.75rem;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s linear, visibility 0.2s linear, transform 0.2s linear;
  transform: translateY(10px);
`;
const DropListItem = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  gap: 4.8125rem;
  padding: 0.5rem;
  &:hover {
    background-color: var(--Brand-Primary-Paler);
    border-radius: 0.5rem;
  }
`;
function Navbar() {
  return (
    <StyledNav>
      <ul className=" flex flex-1 items-center justify-evenly ">
        <li>
          <Logo />
        </li>

        <li>
          <SelectMenu>
            خدمات <img src="public/Down 2.svg" alt="" />
            <DropList>
              <DropListItem>اعلام گم‌شده</DropListItem>
              <DropListItem> اعلام یافتن</DropListItem>
              <DropListItem> ردیابی گوشی موبایل</DropListItem>
              <DropListItem> استعلام بیمه</DropListItem>
            </DropList>
          </SelectMenu>
        </li>
        <li>
          <Link to="/shop">فروشگاه</Link>
        </li>
        <li>
          <Link to="/contactUs">تماس با ما</Link>
        </li>
        <li>
          <Link to="/AllNews">وبلاگ</Link>
        </li>
      </ul>
      <ul className="flex flex-1 items-center justify-evenly">
        <li className="inline-flex items-center justify-center">
          <SelectMenu>
            <img
              src="public/emojione_flag-for-iran.svg"
              alt=""
              className="w-6 h-6"
            />
            فارسی <img src="public/Down 2.svg" alt="" />
            <DropList role="select">
              <DropListItem role="option">فارسی</DropListItem>
              <DropListItem>انگلیسی</DropListItem>
            </DropList>
          </SelectMenu>
        </li>
        <li>
          <Button type="primary">
            <img src="public/Group 3.svg" alt="" />
            ورود نمایندگان
          </Button>
        </li>
        <li>
          <Button type="primary" to="">
            <span>
              <img src="public/Login.svg" alt="" />
            </span>
            <span>ورود یا ثبتنام</span>
          </Button>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Navbar;
