function Main() {
  return (
    <>
      <h1 className="text-center text-zinc-800 text-2xl font-medium  leading-10">
        محصولات آنی یاب
      </h1>
      <main className="flex flex-col md:flex-row  m-10">
        <div className="flex flex-col  border  m-8  w-80 h-96 p-4 bg-white   border-stone-200 gap-3 rounded-xl justify-center items-center  ">
          <div className="  pl-9 pr-8 py-12 bg-neutral-50 rounded-xl justify-center items-center inline-flex overflow-hidden">
            <img src="public/Label-01 1.png" className=" mb-4" />
          </div>
          <div className="">
            <div className="flex flex-row justify-between">
              <h3 className="text-center text-zinc-800 text-base font-bold  leading-7 ">
                آنی‌پارک
              </h3>
              <p className="h-6 px-2 relative  bg-green-50 rounded-xl">XXXX</p>
            </div>
            <p className="text-center">
              آنی پارک محصولی جدید از آنی یاب جهت پیدا نمودن صاحب خودرو می باشد.
            </p>
            <div className="h-6 flex flex-row justify-between items-center ">
              <p className="text-center line-through text-neutral-500 text-base font-bold  leading-7 ">
                190,000 تومان
              </p>
              <p className=" text-right text-zinc-800 text-base font-medium  leading-7">
                179,000 تومان
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  border m-8  w-80 h-96 p-4 bg-white   border-stone-200 gap-3 rounded-xl justify-center items-center  ">
          <div className="  pl-9 pr-8 py-12 bg-neutral-50 rounded-xl justify-center items-center inline-flex overflow-hidden">
            <img src="public/Label-01 1.png" className=" mb-4" />
          </div>
          <div className="">
            <div className="flex flex-row justify-between">
              <h3 className="text-center text-zinc-800 text-base font-bold  leading-7 ">
                آنی‌پارک
              </h3>
              <p className="h-6 px-2 relative  bg-green-50 rounded-xl">XXXX</p>
            </div>
            <p className="text-center">
              آنی پارک محصولی جدید از آنی یاب جهت پیدا نمودن صاحب خودرو می باشد.
            </p>
            <div className="h-6 flex flex-row justify-between items-center ">
              <p className="text-center line-through text-neutral-500 text-base font-bold  leading-7 ">
                190,000 تومان
              </p>
              <p className=" text-right text-zinc-800 text-base font-medium  leading-7">
                179,000 تومان
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
