/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Button({ children, type, disabled, to, onClick }) {
  const base =
    " text-sm font-medium h-10 px-2 py-1.5 rounded-xl  justify-center items-center inline-flex gap-2.5	";
  const styles = {
    primary: base + " border border-neutral-400",
    secondary:
      base + " h-12 p-2.5 rounded-xl border border-sky-900 text-sky-900",
    Tertiary: base + " text-white h-12 p-2.5 bg-sky-900 rounded-xl  ",
    servicesButton:
      base +
      "h-12 p-2.5 bg-white rounded-xl justify-center items-center inline-flex",
    paginationButton:
      " border-0 rounded-sm font-medium text-[1.4rem] flex items-center justify-center gap-[0.4rem] py-[0.6rem] px-[1.2rem] transition-all duration-300 hover:bg-[var(--color-brand-600)] hover:text-[var(--color-brand-50)] hover:disabled:bg-inherit",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
