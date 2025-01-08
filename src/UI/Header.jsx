import Button from "./Button";

function Header() {
  return (
    <div>
      <main className=" flex flex-col md:flex-row justify-evenly mt-16 mb-4">
        <section className="w-[518px] h-80 flex flex-col flex-none gap-8">
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
          <img src="public/Hero visuals.png" alt="" />
        </section>
      </main>
    </div>
  );
}

export default Header;
