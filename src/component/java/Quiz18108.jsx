import { useState } from "react";

const codeString1 = `
import { useState } from "react";

const Quiz18108 = () => {
  const [inputYear, setInputYear] = useState();
  const diffYear = 543;

  const handleChange = (e) => {
    const digitOnly = e.target.value.replace(/[^0-9]/g, "");
    setInputYear(digitOnly);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputYear(Number(inputYear) - diffYear);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">18108</div>
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

export default Quiz18108;
`;

const codeString2 = `
// 1998년생인 내가 태국에서는 2541년생?!
// https://www.acmicpc.net/problem/18108

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String year = sc.nextLine();
        int buddhistEra = Integer.parseInt(year);
        int diffYea = 543;

        System.out.println(buddhistEra-diffYea);
    }

}
`;

const codeString3 = `
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const buddhistEra = Number(input);
const diffYear = 543;

console.log(buddhistEra - diffYear);`;

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

const Quiz18108 = () => {
  const [open, setOpen] = useState(false);
  const [inputYear, setInputYear] = useState("");
  const diffYear = 543;

  const handleChange = (e) => {
    const digitOnly = e.target.value.replace(/[^0-9]/g, "");
    setInputYear(digitOnly);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputYear(Number(inputYear) - diffYear);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">18108</div>
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

export default Quiz18108;
