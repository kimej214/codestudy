import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import Js from "./pages/JS";
import Java from "./pages/Java";
import Quiz10926 from "./component/js/Quiz10926";
import Quiz2675 from "./component/js/Quiz2675";
import Quiz18108 from "./component/java/Quiz18108";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="js" element={<Js />}>
            <Route path="10926" element={<Quiz10926 />} />
            <Route path="2675" element={<Quiz2675 />} />
          </Route>
          <Route path="java" element={<Java />}>
            <Route path="18108" element={<Quiz18108 />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
