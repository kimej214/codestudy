import { Link, Outlet } from "react-router-dom";

const Js = () => {
  const quizBtnCss = "inline-flex px-2 py-1 bg-slate-200 rounded-2xl text-sm";

  return (
    <div className="flex flex-col w-full mt-5">
      <span className="font-semibold text-center">자바스크립트 문제</span>
      <div className="flex justify-center gap-2">
        <Link to="10926" className={quizBtnCss}>
          10926
        </Link>
        <Link to="2675" className={quizBtnCss}>
          2675
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Js;
