import { useState } from "react";

const codeString1 = `import { useState } from "react";

const Quiz10872 = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputNum = Number(input);
    let result = 1;

    for (let i = 1; i <= inputNum; i++) {
      result *= i;
    }
    setResult(result);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">10872</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-slate-300 rounded-lg bg-white py-1 px-2 text-sm"
          placeholder={"10"}
        />
        <button
          type="submit"
          className="cursor-pointer rounded-2xl p-1 bg-slate-700 text-white text-sm"
        >
          제출하기
        </button>
      </form>
      {result && <div className="text-sm">{result}</div>}
    </div>
  );
};

export default Quiz10872;`;

const codeString2 = `package day5;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

//팩토리얼
//https://www.acmicpc.net/problem/10872
public class Java10872 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int inputNumber = Integer.parseInt(br.readLine());
        int result = 1;

        for (int i = 1; i <= inputNumber; i++) {
            result *= i;
        }

        System.out.println(result);
    }
}`;

const codeString3 = `//팩토리얼
//https://www.acmicpc.net/problem/10872

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const inputNum = Number(input);
let result = 1;

for (let i = 1; i <= inputNum; i++) {
    result *= i;
}
console.log(result);`;

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

const Quiz10872 = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputNum = Number(input);
    let result = 1;

    for (let i = 1; i <= inputNum; i++) {
      result *= i;
    }
    setResult(result);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">10872</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-slate-300 rounded-lg bg-white py-1 px-2 text-sm"
          placeholder={"10"}
        />
        <button
          type="submit"
          className="cursor-pointer rounded-2xl p-1 bg-slate-700 text-white text-sm"
        >
          제출하기
        </button>
      </form>
      {result && <div className="text-sm">{result}</div>}
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

export default Quiz10872;
