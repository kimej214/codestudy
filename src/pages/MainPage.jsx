import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="flex flex-col">
        <span className="text-4xl font-bold p-4 text-center">CodeStudy</span>
        <span className="text-center">
          <Link to="https://www.acmicpc.net/">https://www.acmicpc.net/</Link>{" "}
          사이트 공부용
        </span>
      </div>
    </div>
  );
};

export default MainPage;
