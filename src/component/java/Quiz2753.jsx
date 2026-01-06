import { useState } from "react";

const codeString1 = `
import { useState } from "react";

const Quiz2753 = () => {
  const [inputYear, setInputYear] = useState("");

  const handleChange = (e) => {
    const digitOnly = e.target.value.replace(/[^0-9]/g, "");
    setInputYear(digitOnly);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const year =
      (inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0;
    setInputYear(year ? 1 : 0);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">2753</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          value={inputYear}
          className="border border-slate-300 rounded-lg bg-white py-1 px-2 text-sm"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="cursor-pointer rounded-2xl p-1 bg-slate-700 text-white text-sm"
        >
          제출하기
        </button>
      </form>
    </div>
  );
};

export default Quiz2753;
`;

const codeString2 = `
import java.util.Scanner;

// 윤년
// https://www.acmicpc.net/problem/2753
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int year = sc.nextInt();
        boolean leapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

        System.out.println(leapYear ? 1 : 0);
    }

}
`;

const codeString3 = `
const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();
const year = Number(input);

const leapYear =
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(leapYear ? 1 : 0);

`;

const CodeViewer = ({ code }) => {
  return (
    <pre
      className="bg-slate-100 text-black p-4 rounded-lg text-sm overflow-x-hidden"
      style={{
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }}
    >
      <code>{code}</code>
    </pre>
  );
};

const Quiz2753 = () => {
  const [open, setOpen] = useState(false);
  const [inputYear, setInputYear] = useState("");

  const handleChange = (e) => {
    const digitOnly = e.target.value.replace(/[^0-9]/g, "");
    setInputYear(digitOnly);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const year =
      (inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0;
    setInputYear(year ? 1 : 0);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">2753</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          value={inputYear}
          className="border border-slate-300 rounded-lg bg-white py-1 px-2 text-sm"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="cursor-pointer rounded-2xl p-1 bg-slate-700 text-white text-sm"
        >
          제출하기
        </button>
      </form>
      <button
        type="button"
        className="mt-2 text-sm"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "닫기" : "코드보기"}
      </button>
      {open && (
        <div>
          <div className="w-full max-w-2xl my-4">
            <CodeViewer code={codeString1} />
          </div>

          {/* 실제 사이트 제출용 코드 */}
          <div className="text-center text-sm">실제 제출용 (자바 코드)</div>
          <div className="w-full max-w-2xl my-4">
            <CodeViewer code={codeString2} />
          </div>

          {/* Node.js 코드 */}
          <div className="text-center text-sm">Node.js라면?</div>
          <div className="w-full max-w-2xl my-4">
            <CodeViewer code={codeString3} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz2753;
