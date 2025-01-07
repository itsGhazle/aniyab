/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Button({ children, type, disabled, to }) {
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
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
