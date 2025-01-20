import styled from "styled-components";
const Div = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  /* align-self: stretch; */
  border-radius: 0.75rem;
  gap: 2rem;
  background: var(--Brand-Primary-Light);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;
const P = styled.p`
  color: var(--Text-Contrast, #fff);
  text-align: right;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.5rem; /* 166.667% */

  span {
    color: var(--Brand-Secondary-Light);
  }
`;
function Statistics() {
  return (
    <Div>
      <P>
        تعداد اشیا و مدارک تحت پوشش سامانه
        <span> آنی یاب</span> تا این لحظه
      </P>
      <div className=" h-9 justify-center items-center gap-1.5 inline-flex flex-row-reverse	">
        <p className=" text-center text-white text-xl font-semibold leading-9 w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm">
          2
        </p>
        <span className="text-white">,</span>
        <p className=" text-center text-white text-xl font-semibold leading-9 w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm ">
          6
        </p>
        <p className=" text-center text-white text-xl font-semibold leading-9 w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm ">
          8
        </p>
        <p className=" text-center text-white text-xl font-semibold leading-9 w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm ">
          6
        </p>
        <span className="text-white">,</span>
        <p className=" text-center text-white text-xl font-semibold leading-9 w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm ">
          5
        </p>
        <p className=" text-center text-white text-xl font-semibold leading-9 w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm ">
          2
        </p>
        <p className=" text-center text-white text-xl font-semibold leading-9 w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm ">
          2
        </p>
      </div>
    </Div>
  );
}

export default Statistics;
