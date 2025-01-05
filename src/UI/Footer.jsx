function Footer() {
  return (
    <footer className=" flex flex-col flex-1 md:flex-row">
      <div className="flex flex-col justify-start gap-y-3">
        <h3 className="font-semibold">درباره آنی یاب</h3>
        <p className="w-72">
          تیم ما هسته اصلی توسعه موفقیت آمیز ما است،به همین دلیل است که برند
          Aniyab معرف سریع یافتن هر چیزی است، ما در طی سیزده سال فعالیت توانسته
          ایم قدم های موثری در ارائه خدمات پیدا کردن سریع را رونمایی کنیم.
        </p>
      </div>
      <div className="flex  flex-col justify-start gap-y-3">
        <h3>خدمات مشتریان</h3>
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
      <div className="flex flex-col justify-start gap-y-3">
        <h3>با اخبار و به روز رسانی های ما همراه باشید</h3>
        <input
          type="text"
          name=""
          id=""
          placeholder="ایمیل یا شماره موبایل خود را وارد کنید"
          className=" w-72 border rounded border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-stone-400 md:px-6 md:py-3;"
        />
        <button className="text-sm inline-block">عضویت</button>
      </div>
    </footer>
  );
}

export default Footer;
