import Button from "./Button";

function Header() {
  return (
    <div className="">
      <main className=" flex flex-col md:flex-row justify-evenly mt-16 mb-4">
        <section className="w-auto h-80 flex flex-col gap-8">
          <h1 className="text-right text-sky-950 text-5xl font-semibold leading-[60px]  ">
            با آنی یاب،
            <br /> همه چیز پیدا می شود
          </h1>
          <h2 className="text-neutral-700 text-base font-medium leading-7">
            با خرید و نصب برچسب‌های هوشمند آنی‌یاب روی مدارک و اشیای مهم و
            ارزش‌مند، دیگر نگران گم شدن آن‌ها نباشید.
          </h2>
          <div className="inline-flex gap-6">
            <Button type="Tertiary">
              خرید برچسب هوشمند
              <img src="public/Left 1.svg" alt="" />
            </Button>
            <Button type="secondary">
              اعلام گمشده
              <img src="public/ads.svg" alt="" />
            </Button>
          </div>
        </section>
        <section className="w-96 h-96 relative">
          <div className=" w-80 h-80 left-[43px] top-[100.37px] absolute origin-top-left rotate-[-15deg] rounded-full border-8 border-[#f26f24] blur-3xl" />
          <img
            className=" w-44 h-44 left-[73px] top-[197px] absolute rounded-3xl border-4 border-white"
            src="public/left image.jpg"
          />
          <img
            className=" w-44 h-44 left-[224px] top-[42px] absolute rounded-3xl border-4 border-white"
            src="public/right image.svg"
          />
          <div className=" w-24 h-24 p-1 left-[189px] top-[165px] absolute bg-white rounded-3xl border-4 border-white justify-center items-center inline-flex overflow-hidden">
            <div className="Logo grow shrink basis-0 self-stretch p-4 bg-white rounded-3xl shadow-[0px_1px_8px_0px_rgba(163,163,163,0.25)] justify-center items-center inline-flex overflow-hidden">
              <img src="public/logo.svg" alt="" />
            </div>
          </div>
          <div className=" left-[66px] top-[49px] absolute justify-start items-start inline-flex">
            <div className=" p-3 bg-white border rounded-lg border-white justify-start items-start gap-1.5 flex  text-neutral-700  text-sm font-medium leading-7">
              کیف پولم رو گم کردم🙁
            </div>
          </div>
          <div className="LtrArrow w-16 h-5 left-[154.07px] top-[183.79px] absolute origin-top-left rotate-[-30deg]  overflow-hidden" />
          <div
            data-layer="RTL arrow"
            className="RtlArrow w-16 h-5 left-[315.94px] top-[232px] absolute origin-top-left rotate-[150deg]  overflow-hidden"
          />
          <div
            data-layer="Bubble right"
            className="BubbleRight left-[226px] top-[306px] absolute shadow-[0px_4px_12px_0px_rgba(163,163,163,0.25)] justify-start items-start inline-flex"
          >
            <div className="Frame1 py-3 bg-white border border-white justify-start items-start gap-1.5 flex">
              <div
                data-layer="Frame 1713570"
                className="Frame1713570 w-5 pt-1 flex-col justify-center items-center gap-2.5 inline-flex"
              >
                <div data-layer="Text" className="Text self-stretch">
                  <span className="text-neutral-700 text-sm font-medium font-['DanaFaNum'] leading-7">
                    {" "}
                  </span>
                  <span className="text-neutral-700 text-base font-bold font-['DanaFaNum'] leading-normal">
                    🙂
                  </span>
                </div>
              </div>
              <div
                data-layer="Text"
                className="Text text-neutral-700 text-sm font-medium font-['DanaFaNum'] leading-7"
              >
                نگران نباش، پیداش کردم
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Header;
