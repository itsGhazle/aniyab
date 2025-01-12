/* eslint-disable react/prop-types */

function News() {
  return (
    <main className="flex flex-col  border   w-80  p-4 bg-white   border-stone-200 gap-3 rounded-xl justify-center items-center  ">
      <div className="  pl-9 pr-8 py-12 bg-neutral-50 rounded-xl justify-center items-center inline-flex">
        <img src="public/news.jpg" className=" mb-4" />
      </div>
      <div>
        <div className="flex flex-row justify-between">
          <h3 className="text-center text-zinc-800 text-base font-bold  leading-7 ">
            راهنمایی گمشدگان در ایام اربعین حسینی | 1403/2/30
          </h3>
        </div>
        <p className="mt-4">
          با ایجاد مراکز راهنمایی گمشدگان در ایام اربعین حسینی؛ صدها گمشده به
          خانواده هایشان تحویل داده شدند
        </p>
      </div>
    </main>
  );
}

export default News;
