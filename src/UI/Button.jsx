/* eslint-disable react/prop-types */

function Button({ children, type }) {
  const base = "text-sm text-slate-50 border rounded bg-red-300 px-4";
  const styles = {
    primary: base,
    secondary: base + " mt-2 px-4 py-3 md:px-6 md:py-4",
  };
  return <button className={styles[type]}>{children} </button>;
}

export default Button;
