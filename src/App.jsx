import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import Js from "./pages/JS";
import Java from "./pages/Java";
import Quiz10926 from "./component/js/Quiz10926";
import Quiz2675 from "./component/js/Quiz2675";
import Quiz18108 from "./component/java/Quiz18108";
import Quiz2753 from "./component/java/Quiz2753";
import Quiz25304 from "./component/java/Quiz25304";
import Quiz10988 from "./component/java/Quiz10988";
import Quiz2563 from "./component/java/Quiz2563";
import Quiz10809 from "./component/java/Quiz10809";
import Quiz25206 from "./component/java/Quiz25206";
import Quiz2738 from "./component/java/Quiz2738";
import Quiz2745 from "./component/java/Quiz2745";
import Quiz1436 from "./component/java/Quiz1436";
import Quiz2750 from "./component/java/Quiz2750";
import Quiz7785 from "./component/java/Quiz7785";
import Quiz1934 from "./component/java/Quiz1934";
import Quiz28278 from "./component/java/Quiz28278";
import Quiz10872 from "./component/java/Quiz10872";
import Quiz26069 from "./component/java/Quiz26069";
import Quiz10870 from "./component/java/Quiz10870";

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
            <Route path="2753" element={<Quiz2753 />} />
            <Route path="25304" element={<Quiz25304 />} />
            <Route path="10988" element={<Quiz10988 />} />
            <Route path="2563" element={<Quiz2563 />} />
            <Route path="10809" element={<Quiz10809 />} />
            <Route path="25206" element={<Quiz25206 />} />
            <Route path="2738" element={<Quiz2738 />} />
            <Route path="2745" element={<Quiz2745 />} />
            <Route path="1436" element={<Quiz1436 />} />
            <Route path="2750" element={<Quiz2750 />} />
            <Route path="7785" element={<Quiz7785 />} />
            <Route path="1934" element={<Quiz1934 />} />
            <Route path="28278" element={<Quiz28278 />} />
            <Route path="10872" element={<Quiz10872 />} />
            <Route path="26069" element={<Quiz26069 />} />
            <Route path="10870" element={<Quiz10870 />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
