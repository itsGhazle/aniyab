import Button from "./Button";

function Services() {
  return (
    <main className="">
      <h2 className="text-center font-bold text-xl mb-4">خدمات ارزشمند</h2>
      <section className="flex flex-col justify-between content-between	items-center gap-8  md:flex-row md:justify-evenly my-4 ">
        <div className="w-80 h-96 px-6 pt-10 pb-16 bg-blue-800 rounded-tl-xl rounded-tr-3xl rounded-bl-xl rounded-br-xl flex-col justify-between items-start inline-flex overflow-hidden relative">
          <h2 className="self-stretch text-right text-white text-2xl font-medium leading-10 ">
            اعلام یافتن
          </h2>
          <p className="text-right text-white/80 text-base font-medium  leading-7">
            اگر چیزی پیدا کردید، مشخصات آن‌ را ثبت کنید تا به مالک آن
            اطلاع‌رسانی کنیم.
          </p>

          <Button type="servicesButton">
            تکمیل فرم <img src="public/Left-black.svg" alt="" />
          </Button>
          <img
            src="public/illustration 1.svg"
            alt=""
            className="absolute bottom-0 left-0"
          />
        </div>
      </section>
    </main>
  );
}

export default Services;
