import AccordionItems from "./AccordionItems";
import Button from "./Button";

function FrequentlyAskedQuestions() {
  return (
    <div>
      <h1 className="text-center text-zinc-800 text-2xl font-medium leading-10">
        سوالات پرتکرار
      </h1>
      <section className="flex flex-row md:mx-10 mx-auto   mb-6 items-center justify-between gap-16">
        <AccordionItems />
        <div className="h-[276px] px-[72px] py-6 bg-white rounded-xl border border-stone-200 flex-col justify-between items-center inline-flex">
          <h2>سوال دیگری دارید؟</h2>
          <p>با ما در ارتباط باشید.</p>
          <p>02191012020</p>
          <Button type="Tertiary">
            <img src="public/Headphone 1.svg" alt="" />
            تماس با پشتیبانی
          </Button>
        </div>
      </section>
    </div>
  );
}

export default FrequentlyAskedQuestions;
