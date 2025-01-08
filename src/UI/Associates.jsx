import { Link } from "react-router-dom";

function Associates() {
  return (
    <section>
      <h1 className="text-center text-zinc-800 text-2xl font-medium leading-10 mt-20 mb-8">
        همکاران آنی یاب
      </h1>
      <ul className="flex flex-row gap-5 justify-center ">
        <li className="h-[188px] p-5 bg-white rounded-xl border border-stone-200 justify-start items-center gap-2.5 inline-flex">
          <Link to="">
            <img src="public/metro.svg" alt="" />
          </Link>
        </li>
        <li className="h-[188px] p-5 bg-white rounded-xl border border-stone-200 justify-start items-center gap-2.5 inline-flex ">
          <Link to="">
            <img src="public/postlogo.svg" alt="" />
          </Link>
        </li>
        <li className="h-[188px] p-5 bg-white rounded-xl border border-stone-200 justify-start items-center gap-2.5 inline-flex ">
          <Link to="">
            <img src="public/Shahrdari.svg" alt="" />
          </Link>
        </li>
        <li className="h-[188px] p-5 bg-white rounded-xl border border-stone-200 justify-start items-center gap-2.5 inline-flex">
          <Link to="">
            <img src="public/pishkhanIranian.svg" alt="" />
          </Link>
        </li>
        <li className="h-[188px] p-5 bg-white rounded-xl border border-stone-200 justify-start items-center gap-2.5 inline-flex">
          <Link to="">
            <img src="public/HamrahAval.svg" alt="" />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Associates;
