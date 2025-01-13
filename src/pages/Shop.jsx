import { useState } from "react";
import styled from "styled-components";
import Pagination from "../UI/Pagination"
const Button = styled.button`
  border: 1px solid var(--Brand-Primary-Main);
  border-radius: 0.75rem;
  color: var(--Brand-Primary-Main);
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
  padding: 0.625rem;
`;
const StyledShop = styled.section`
  display:flex;
  flex-direction: column;
  gap:1rem;
  margin-top: 5rem;
  align-items: center;
  @media (min-width: 768px) { display:flex; flex-direction:row ; flex-wrap:wrap }
`
function Shop() {
  const[soldOut,isSoldOut]=useState(true)
  function handleClick(e) {
    e.preventDefault();

  }
  return (
    <>
      <section>
        <h2>همه محصولات</h2>
        <div className="flex gap-4 mt-20 items-center">
          <h3>مرتب سازی براساس:</h3>
          <Button onClick={handleClick}>
همه          </Button>
          <Button onClick={handleClick}>
            پروفروش ترین
          </Button>
        </div>
      </section>
      <StyledShop >
        <div className="flex flex-col items-center shadow gap-3 w-72 p-4  m-10">
          <img src="public/anipark.jpg" alt="" />
          <p className="flex flex-row gap-3 mt-2">
            <Button>افزودن به سبد خرید</Button>
            <Button >توضیحات</Button>
          </p>
          <div className="flex gap-8 justify-between mt-2"><span>  برچسب 12 عددی</span><span> 179000 تومان</span></div>
        </div>
        <div className="flex flex-col items-center shadow gap-3 w-72 p-4 m-10">
          <img src="public/anipark.jpg" alt="" />
          <p className="flex flex-row gap-3 mt-2">
            <Button>افزودن به سبد خرید</Button>
            <Button>توضیحات</Button>
          </p>
          <div className="flex gap-8 justify-between mt-2"><span>  برچسب 12 عددی</span><span> 179000 تومان</span></div>
        </div>
        <div className="flex flex-col items-center shadow gap-3 w-72 p-4 m-10">
          <img src="public/anipark.jpg" alt="" />
          <p className="flex flex-row gap-3 mt-2">
            <Button>افزودن به سبد خرید</Button>
            <Button>توضیحات</Button>
          </p>
          <div className="flex gap-8 justify-between mt-2"><span>  برچسب 12 عددی</span><span> 179000 تومان</span></div>
        </div>
        <div className="flex flex-col items-center shadow gap-3 w-72 p-4 m-10 relative">
          {isSoldOut? <span className="bg-stone-300 p-2 rounded-md absolute z-10 right-0">اتمام موجودی</span>: null}
          <img src="public/anipark.jpg" alt="" className={`${soldOut ? 'opacity-70 blur-sm' : ''}`} />
          <p className="flex flex-row gap-3 mt-2">
            <Button disabled={isSoldOut}>افزودن به سبد خرید</Button>
            <Button disabled={isSoldOut}>توضیحات</Button>
          </p>
          <div className={`flex gap-8 justify-between mt-2 `}><span>  برچسب 12 عددی</span><span> 179000 تومان</span></div>
        </div>
        
      </StyledShop><Pagination count="15"/>
    </>
  );
}

export default Shop;
