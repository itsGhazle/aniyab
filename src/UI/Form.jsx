/* eslint-disable react/prop-types */

import { useState } from "react";
import Button from "./Button";

function Form() {
  const { searchArea, setSearchArea } = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setSearchArea(e);
  }
  return (
    <>
      <form className="flex justify-center mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className=" w-72 border rounded border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-stone-400 md:px-6 md:py-3;"
          placeholder="کد آنی یاب یا کد ملی خود را وارد کنید "
          value={searchArea}
          onChange={(e) => setSearchArea(e.target.value)}
        />
        <Button type="primary">جستجوی گمشده</Button>
      </form>
    </>
  );
}

export default Form;
