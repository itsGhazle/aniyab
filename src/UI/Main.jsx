import Button from "./Button";

function Main() {
  return (
    <section className="flex flex-col md:flex-row border m-10">
      <div className="flex flex-col justify-center items-center border rounded m-8 p-6">
        <h3 className="font-semibold mb-2 ">چیزی پیدا کردید؟</h3>
        <img src="public/succes2.png" className="w-8 h-8 mb-4" />
        <p className="text-center">
          اگر چیزی پیدا کردید در فرم اعلام یافتن ثبت کنید تا به مالک آن اطلاع
          رسانی کنیم.
        </p>
        <Button type="secondary">فرم اعلام یافتن</Button>
      </div>
      <div className="flex flex-col justify-center items-center border rounded m-8 p-6">
        <h3 className="font-semibold mb-2 ">چیزی پیدا کردید؟</h3>
        <img src="public/succes2.png" className="w-8 h-8 mb-4" />
        <p className="text-center">
          اگر چیزی پیدا کردید در فرم اعلام یافتن ثبت کنید تا به مالک آن اطلاع
          رسانی کنیم.
        </p>
        <Button type="secondary">فرم اعلام یافتن</Button>
      </div>
      <div className="flex flex-col justify-center items-center border rounded m-8 p-6">
        <h3 className="font-semibold mb-2 ">چیزی پیدا کردید؟</h3>
        <img src="public/succes2.png" className="w-8 h-8 mb-4" />
        <p className="text-center">
          اگر چیزی پیدا کردید در فرم اعلام یافتن ثبت کنید تا به مالک آن اطلاع
          رسانی کنیم.
        </p>
        <Button type="secondary">فرم اعلام یافتن</Button>
      </div>
    </section>
  );
}

export default Main;
