import Button from "./Button";

function FrequentlyAskedQuestions() {
  return (
    <section className="flex flex-col md:flex-row md:mx-10 flex-none mx-auto w-96 md:w-auto mb-6 items-center">
      <img src="public/faq.png" alt="" className="w-64 h-64 " />
      <div className="px-6">
        <h2>پاسخ به سوالات متداول</h2>
        <ul className="list-disc	">
          <li>
            آیا در ایران و دنیا سیستم مشابهی وجود دارد؟
            <p>
              خیر، سیستم ردیابی پیامکی و بسته های آنی یاب برای اولین بار در
              ایران و دنیا برای اشیاء گمشده و سرقت شده از طرف آقای سید مهدی
              قیصری ثبت اختراع و تجاری سازی شده است
            </p>
          </li>
          <li>
            به زبان ساده این سیستم چه کمکی به ما میکند؟
            <p>
              خیر، سیستم ردیابی پیامکی و بسته های آنی یاب برای اولین بار در
              ایران و دنیا برای اشیاء گمشده و سرقت شده از طرف آقای سید مهدی
              قیصری ثبت اختراع و تجاری سازی شده است
            </p>
          </li>
        </ul>
        <Button type="secondary">مشاهده بیشتر</Button>
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
