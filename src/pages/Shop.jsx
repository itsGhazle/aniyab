import Button from "../UI/Button";
function Shop() {
  function handleClick() {}
  return (
    <>
      <section>
        <h2>همه محصولات</h2>
        <div className="flex gap-4 mt-20">
          <h3>مرتب سازی براساس:</h3>
          <Button type="primary" onClick={handleClick}>
            پروفروش ترین
          </Button>
          <Button type="primary">همه</Button>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center flex-wrap">
        <div className="flex flex-col items-center shadow gap-2 w-72 p-4 m-5">
          <img src="public/anipark.jpg" alt="" />
          <p className="flex flex-row gap-2 mt-2">
            <Button type="Tertiary">افزودن به سبد خرید</Button>
            <Button type="Tertiary">توضیحات</Button>
          </p>
        </div>
        <div className="flex flex-col items-center shadow w-72 p-4 m-10">
          <img src="public/anipark.jpg" alt="" />
          <p className="flex flex-row gap-2 mt-2">
            <Button type="Tertiary">افزودن به سبد خرید</Button>
            <Button type="Tertiary">توضیحات</Button>
          </p>
        </div>
        <div className="flex flex-col items-center shadow w-72 p-4 m-10">
          <img src="public/anipark.jpg" alt="" />
          <p className="flex flex-row gap-2 mt-2">
            <Button type="Tertiary">افزودن به سبد خرید</Button>
            <Button type="Tertiary">توضیحات</Button>
          </p>
        </div>
      </section>
    </>
  );
}

export default Shop;
