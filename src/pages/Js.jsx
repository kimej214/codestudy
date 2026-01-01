import { Link, Outlet } from "react-router-dom";

const Js = () => {
  return (
    <div className="flex flex-col w-full mt-5">
      <span className="font-semibold text-center">자바스크립트 문제</span>
      <div className="flex justify-center">
        <Link to="10926" className="inline-flex p-2 bg-slate-200 rounded-2xl">
          Quiz10926
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Js;
