/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function LatestNews() {
  return (
    <section className="flex flex-row items-center justify-center bg-white border rounded-xl border-stone-200 mb-8 p-4">
      <img src="public/news.jpg" alt="" />
      <div className="w-96 h-60 p-8 bg-white/40 rounded-xl border-2 border-white backdrop-blur-xl flex flex-col justify-center items-center gap-2 ">
        <span>1403/2/30</span>
        <Link to="/News">راهنمایی گمشدگان در ایام اربعین حسینی</Link>
        <p>
          با ایجاد مراکز راهنمایی گمشدگان در ایام اربعین حسینی؛ صدها گمشده به
          خانواده هایشان تحویل داده شدند
        </p>
      </div>
    </section>
  );
}

export default LatestNews;
