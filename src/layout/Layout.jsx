import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-row justify-evenly bg-slate-800 text-white py-3">
        <Link to="/">Main</Link>
        <Link to="/js">JS</Link>
        <Link to="/java">Java</Link>
      </header>

      <main className="flex-1 flex">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
