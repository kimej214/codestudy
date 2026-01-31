import { useState } from "react";

const codeString1 = `import { useState } from "react";

const Quiz10870 = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const n = Number(input);

    const result = [];
    result.push(0);
    result.push(1);

    for (let i = 2; i <= n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }

    setResult(result[n]);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">10870</div>
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

export default Quiz10870;`;

const codeString2 = `package day5;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

//피보나치 수 5
//https://www.acmicpc.net/problem/10870
public class Java10870 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int input = Integer.parseInt(br.readLine());

        List<Integer> result = new ArrayList<>();
        result.add(0);
        result.add(1);

        for (int i = 2; i <= input; i++) {
            result.add(result.get(i - 1) + result.get(i - 2));
        }

        System.out.println(result.get(input));

    }
}`;

const codeString3 = `// 피보나치 수 5
// https://www.acmicpc.net/problem/10870

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const n = Number(input);

const result = [];
result.push(0);
result.push(1);

for (let i = 2; i <= n; i++) {
  result.push(result[i - 1] + result[i - 2]);
}

console.log(result[n]);`;

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

const Quiz10870 = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const n = Number(input);

    const result = [];
    result.push(0);
    result.push(1);

    for (let i = 2; i <= n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }

    setResult(result[n]);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">10870</div>
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

          <div className="pb-5 flex flex-col gap-2">
            <div>
              -{" "}
              <span className="bg-amber-200 font-semibold">
                {"List<Integer> result = new ArrayList<>();"}
              </span>
              <div className="pl-4 flex flex-col gap-2">
                처음에 배열 크기가 정해지기 때문에 int[] 배열로 풀 수 있음
              </div>
            </div>
            <div>- set이랑 get은 add된 뒤에 가능</div>
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

export default Quiz10870;
