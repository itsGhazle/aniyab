import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link to={"/"}>
        <img src="public/logoNav.svg" className="w-7 h-8" />
      </Link>
    </>
  );
}

export default Logo;
