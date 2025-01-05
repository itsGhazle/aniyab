import { Link } from "react-router-dom";
import Logo from "./Logo";
function Navbar() {
  return (
    <>
      <nav className="flex flex-row gap-4 w-full fixed p-4 mb-2 bg-slate-50">
        <Logo />
        <ul className=" flex flex-1 items-center justify-evenly ">
          <li>
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/shop">فروشگاه</Link>
          </li>
          <li>
            <Link>وبلاگ</Link>
          </li>
          <li>
            <Link>پلیکیشن</Link>
          </li>

          <li>
            <Link>وبلاگ</Link>
          </li>
          <li>
            <Link>شارژ</Link>
          </li>
          <li>
            <Link>درباره ما</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
