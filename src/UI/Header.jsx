import Form from "./Form";

function Header() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-20 mb-4">
        با آنی یاب همه چیز پیدا می شود.
      </h1>
      <h2 className="text-center">
        با ما سریع تر گمشده های خود را پیدا کنید و پیداشده ها را به مالک خود
        برسانید.
      </h2>
      <Form />
    </>
  );
}

export default Header;
