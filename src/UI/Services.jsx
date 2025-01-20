import styled from "styled-components";
import Button from "./Button";
const Section = styled.section`
  display: flex;
  padding: 2.5rem 1.5rem 4rem 1.5rem;
  justify-content: space-between;
  gap: 0.75rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    row-gap: 1.5rem;
  }
`;
const Div = styled.div`
  display: flex;
  width: 19.5rem;
  height: 22.25rem;
  padding: 2.5rem 1.5rem 4rem 1.5rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 3.75rem 0.75rem 0.75rem 0.75rem;
  background: var(--Brand-Primary-Light);
  @media (max-width: 768px) {
    width: 328px;
    height: 208px;
  }
`;
function Services() {
  return (
    <main className="">
      <h2 className=" text-center text-zinc-800 text-2xl font-medium leading-10 mt-20 mb-8">
        خدمات ارزشمند
      </h2>
      <Section>
        <Div className="w-80 h-96 px-6 pt-10 pb-16 bg-blue-800 rounded-tl-xl rounded-tr-3xl rounded-bl-xl rounded-br-xl flex-col justify-between items-start inline-flex  relative">
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
        </Div>
        <div className="w-80 h-96 px-6 pt-10 pb-16 bg-blue-800 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl flex-col justify-between items-start inline-flex  relative">
          <h2 className="self-stretch text-right text-white text-2xl font-medium leading-10 ">
            اعلام گم‌شده
          </h2>
          <p className="text-right text-white/80 text-base font-medium  leading-7">
            اگر چیزی گم کردید، فرم اعلام مفقودی را پر کنید تا اگر گمشده‌تان پیدا
            شد، به شما اطلاع دهیم.
          </p>

          <Button type="servicesButton">
            تکمیل فرم <img src="public/Left-black.svg" alt="" />
          </Button>
          <img
            src="public/illustration 2.png"
            alt=""
            className="absolute bottom-0 left-0"
          />
        </div>
        <div className="w-80 h-96 px-6 pt-10 pb-16 bg-blue-800 rounded-tl-3xl rounded-tr-xl rounded-bl-xl rounded-br-xl flex-col justify-between items-start inline-flex  relative">
          <h2 className="self-stretch text-right text-white text-2xl font-medium leading-10 ">
            ردیابی تلفن همراه
          </h2>
          <p className="text-right text-white/80 text-base font-medium  leading-7">
            اگر موبایل یا کالای دیجیتال دیگری گم کرده‌اید، برای ردیابی آن از فرم
            زیر استفاده کنید.
          </p>

          <Button type="servicesButton">
            تکمیل فرم <img src="public/Left-black.svg" alt="" />
          </Button>
          <img
            src="public/illustration 3.png"
            alt=""
            className="absolute bottom-0 left-0"
          />
        </div>
      </Section>
    </main>
  );
}

export default Services;
