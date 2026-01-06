import { Link, Outlet } from "react-router-dom";

const Java = () => {
  const quizBtnCss = "inline-flex px-2 py-1 bg-slate-200 rounded-2xl text-sm";

  return (
    <div className="flex flex-col w-full mt-5">
      <span className="font-semibold text-center">자바 문제</span>
      <div className="flex justify-center gap-2">
        <Link to="18108" className={quizBtnCss}>
          18108
        </Link>
        <Link to="2753" className={quizBtnCss}>
          2753
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Java;
