import { Link, Outlet } from "react-router-dom";

const Js = () => {
  const css = "inline-flex p-2 bg-slate-200 rounded-2xl";

  return (
    <div className="flex flex-col w-full mt-5">
      <span className="font-semibold text-center">자바스크립트 문제</span>
      <div className="flex justify-center gap-2">
        <Link to="10926" className={css}>
          Quiz10926
        </Link>
        <Link to="2675" className={css}>
          Quzie2675
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Js;
