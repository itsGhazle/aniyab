import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <main className="flex flex-col p-8 md:flex-row gap-4 justify-between bg-zinc-100 mt-20">
        <div className="flex flex-col justify-start gap-y-3 ">
          <img
            src="public/logo-footer.svg"
            alt=""
            className="w-24 h-24 relative"
          />
          <h3 className="font-semibold">درباره ما</h3>
          <p className="w-full md:w-72">
            تیم ما هسته اصلی توسعه موفقیت آمیز ما است،به همین دلیل است که برند
            Aniyab معرف سریع یافتن هر چیزی است، ما در طی سیزده سال فعالیت
            توانسته ایم قدم های موثری در ارائه خدمات پیدا کردن سریع را رونمایی
            کنیم.
          </p>
          <div className="flex py-2 justify-start items-center gap-12">
            <div className="h-11 p-2.5 rounded-xl border border-neutral-400 justify-center items-center inline-flex">
              <img src="public/ri_instagram-line.svg" alt="" />
            </div>
            <div className="h-11 p-2.5 rounded-xl border border-neutral-400 justify-center items-center inline-flex">
              <img src="public/ri_instagram-line.svg" alt="" />
            </div>
            <div className="h-11 p-2.5 rounded-xl border border-neutral-400 justify-center items-center inline-flex">
              <img src="public/ri_instagram-line.svg" alt="" />
            </div>
            <div className="h-11 p-2.5 rounded-xl border border-neutral-400 justify-center items-center inline-flex">
              <img src="public/ri_instagram-line.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex  flex-col justify-start gap-y-3">
          <h3 className="font-semibold">خدمات مشتریان</h3>
          <ul>
            <li>سوالات متداول</li>
            <li>شرایط استفاده</li>
            <li>مجوز ها</li>
            <li>طرح غرامت</li>
            <li>محل صحیح نصب برچسب آنی یاب</li>
            <li>ملاقات با تیم ما</li>
            <li>بروزرسانی سایت</li>
            <li>بازخورد مشتریان</li>
          </ul>
        </div>
        <div className="flex  flex-col justify-start gap-y-3 ">
          <h3 className="font-semibold">دسترسی سریع </h3>
          <ul>
            <li>سوالات متداول</li>
            <li>شرایط استفاده</li>
            <li>مجوز ها</li>
            <li>طرح غرامت</li>
            <li>محل صحیح نصب برچسب آنی یاب</li>
            <li>ملاقات با تیم ما</li>
            <li>بروزرسانی سایت</li>
            <li>بازخورد مشتریان</li>
          </ul>
        </div>
        <div className=" flex flex-row md:flex-col justify-start gap-y-3 ">
          <h3 className="font-semibold">تماس با ما</h3>
          <ul className="grid grid-cols-[200px_200px] gap-2 items-start justify-between content-between	">
            <li className="inline-flex items-start gap-1 ">
              <span>info@Aniyab.com</span>
              <img src="public/Message 35.svg" alt="" />
            </li>
            <li className="inline-flex items-center gap-1 justify-end">
              <span>121321122</span> <img src="public/Call.svg" alt="" />
            </li>
            <li className="inline-flex items-center">
              <img src="public/Location.svg" alt="" className="w-5 h-5" />
              <span className=" text-zinc-800 text-sm font-medium">
                دفتر مرکزی:
              </span>
            </li>
            <li className="inline-flex justify-end items-center">
              <Link className="inline-flex text-[var(--Brand-Primary-Main)]">
                مسیریابی
                <img src="public/Left-indigo.svg" alt="" />
              </Link>
            </li>
            <li className="col-span-full">
              آباد، کوچه 22 بهمن 3، کوچه امام خمینی 18، پلاک 2، تولید پلاک، طبقه
              همکف، مرکز ملی آنی یاب
            </li>
            <li>دفتر فروش:</li>
            <li className="inline-flex justify-end items-center">
              <Link className="inline-flex text-[var(--Brand-Primary-Main)]">
                مسیریابی
                <img src="public/Left-indigo.svg" alt="" />
              </Link>
            </li>
            <li className="col-span-full">
              تهران میدان توحید خیابان شهید یداله امیرلو بن بست خودرو پلاک 3
            </li>
            <li className=" col-span-full inline-flex justify-evenly">
              <img className="w-14 h-20" src="public/samandehi1.svg" alt="" />
              <img className="w-14 h-20" src="public/majazi.svg" alt="" />
              <img className="w-14 h-20" src="public/enamad.svg" alt="" />
            </li>
          </ul>
        </div>
      </main>
      <p className="w-full  border border-stone-300 h-1 py-8 bg-zinc-100 flex-col justify-start items-center gap-4 inline-flex">
        &copy; تمام حقوق مادی و معنوی وبسایت مربوط به شرکت آنی‌یاب می‌باشد.
      </p>
    </footer>
  );
}

export default Footer;
