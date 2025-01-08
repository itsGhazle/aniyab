import { useState } from "react";

function AccordionItems() {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <section
      className="border border-stone-200 rounded-xl flex-1  overflow-hidden"
      onClick={handleToggle}
    >
      <div className="flex justify-between items-center p-3 ">
        <span className="text-zinc-800 text-base font-medium  leading-7">
          آیا در ایران و دنیا سیستم مشابهی وجود دارد؟
        </span>
        {isOpen ? (
          <img src="public/Up Circle 2.svg" alt="" />
        ) : (
          <img src="public/Down Circle 2.svg" alt="" />
        )}
      </div>
      {isOpen && (
        <div className="h-16 p-3 bg-indigo-50 border rounded-br-xl rounded-bl-xl text-right text-neutral-700 text-xs font-medium  leading-normal  transition duration-150 ease-in-out ">
          خیر، سیستم ردیابی پیامکی و بسته های آنی یاب برای اولین بار در ایران و
          دنیا برای اشیاء گمشده و سرقت شده از طرف آقای سید مهدی قیصری ثبت اختراع
          و تجاری سازی شده است
        </div>
      )}
    </section>
  );
}

export default AccordionItems;
