import { Link } from "react-router-dom";

function Associates() {
  return (
    <section className="m-5">
      <h1 className="text-center font-semibold text-xl mt-4">
        همکاران آنی یاب
      </h1>
      <ul className="flex flex-wrap gap-5 ">
        <li className="w-48 h-32 ">
          <Link to="">
            <img src="public/magfa.png" alt="" />
          </Link>
        </li>
        <li className="w-48 h-32 ">
          <Link to="">
            <img src="public/magfa.png" alt="" />
          </Link>
        </li>
        <li className="w-48 h-32 ">
          <Link to="">
            <img src="public/magfa.png" alt="" />
          </Link>
        </li>
        <li className="w-48 h-32 ">
          <Link to="">
            <img src="public/magfa.png" alt="" />
          </Link>
        </li>
        <li className="w-48 h-32 ">
          <Link to="">
            <img src="public/magfa.png" alt="" />
          </Link>
        </li>
        <li className="w-48 h-32 ">
          <Link to="">
            <img src="public/magfa.png" alt="" />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Associates;
