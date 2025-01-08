import { Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
function Navbar() {
  return (
    <>
      <nav className="flex flex-row gap-4 w-full py-5 p-[72px] justify-between">
        <ul className=" flex flex-1 items-center justify-evenly ">
          <li>
            <Logo />
          </li>

          <li>
            <select name="services" id="">
              <option value="service">خدمات</option>
            </select>
          </li>
          <li>
            <Link to="/shop">فروشگاه</Link>
          </li>
          <li>
            <Link>تماس با ما</Link>
          </li>
          <li>
            <Link>وبلاگ</Link>
          </li>
        </ul>
        <ul className="flex flex-1 items-center justify-evenly">
          <li>
            <select name="translate" id="">
              <option value="Persian" selected>
                فارسی{" "}
                <img
                  src="public/emojione_flag-for-iran.svg"
                  alt=""
                  className="w-8 h-8"
                />
              </option>
              <option value="English">انگلیسی</option>
            </select>
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
      </nav>
    </>
  );
}

export default Navbar;
