import { useState } from "react";

const codeString1 = `import { useState } from "react";

const Quiz1934 = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = inputValue.trim().split("\\n");
    const count = Number(input[0]);
    let line = 1;

    const outputs = [];

    for (let i = 0; i < count; i++) {
      const parts = input[line].split(" ");
      const x = Number(parts[0]);
      const y = Number(parts[1]);
      line++;

      const xSet = new Set();
      for (let j = 1; j <= x; j++) {
        if (x % j === 0) xSet.add(j);
      }

      const ySet = new Set();
      for (let j = 1; j <= y; j++) {
        if (y % j === 0) ySet.add(j);
      }

      let common = 1;
      for (const value of xSet) {
        if (ySet.has(value)) common = value;
      }

      const resultLine = (x * y) / common;
      outputs.push(resultLine);
    }

    setResult(outputs.join("\\n"));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">1934</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          placeholder={"3\\n1 45000\\n6 10\\n13 1755"}
        />
        <button
          type="submit"
          className="cursor-pointer rounded-2xl p-1 bg-slate-700 text-white text-sm"
        >
          제출하기
        </button>
      </form>

      {result && (
        <pre
          className="text-sm whitespace-pre-line"
          style={{ wordBreak: "break-word" }}
        >
          {result}
        </pre>
      )}
    </div>
  );
};

export default Quiz1934;`;

const codeString2 = `package day4;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Set;
import java.util.TreeSet;

// 최소공배수
// https://www.acmicpc.net/problem/1934
public class Java1934 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int count = Integer.parseInt(br.readLine());

        for (int i=0; i< count; i++) {
            String[] inputNum = br.readLine().split(" ");
            int x = Integer.parseInt(inputNum[0]);
            int y = Integer.parseInt(inputNum[1]);

            Set<Integer> xList = new TreeSet<>();
            for (int j = 1; j <= x; j++) {
                if(x % j==0){
                    xList.add(j);
                }
            }

            Set<Integer> yList = new TreeSet<>();
            for (int j = 1; j <= y; j++) {
                if(y % j==0){
                    yList.add(j);
                }
            }

            int common = 1;
            for(int value : xList) {
                if (yList.contains(value)) {
                    common = value;
                }
            }

            System.out.println(x*y/common);

        }
    }
}`;

const codeString3 = `// 최소공배수
// https://www.acmicpc.net/problem/1934

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\\n");

const count = Number(input[0]);
let line = 1;

for (let i = 0; i < count; i++) {
  //const [x, y] = input[line++].split(" ").map(Number); 아래와 동일
  const parts = input[line].split(" ");
  const x = Number(parts[0]);
  const y = Number(parts[1]);
  line++;

  // x의 약수 집합
  const xSet = new Set();
  for (let j = 1; j <= x; j++) {
    if (x % j === 0) {
      xSet.add(j);
    }
  }

  // y의 약수 집합
  const ySet = new Set();
  for (let j = 1; j <= y; j++) {
    if (y % j === 0) {
      ySet.add(j);
    }
  }

  // 최대공약수 찾기
  let common = 1;
  for (const value of xSet) {
    if (ySet.has(value)) {
      common = value;
    }
  }

  // 최소공배수 출력
  console.log((x * y) / common);
}`;

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

const Quiz1934 = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = inputValue.trim().split("\n");
    const count = Number(input[0]);
    let line = 1;

    const outputs = [];

    for (let i = 0; i < count; i++) {
      const parts = input[line].split(" ");
      const x = Number(parts[0]);
      const y = Number(parts[1]);
      line++;

      const xSet = new Set();
      for (let j = 1; j <= x; j++) {
        if (x % j === 0) xSet.add(j);
      }

      const ySet = new Set();
      for (let j = 1; j <= y; j++) {
        if (y % j === 0) ySet.add(j);
      }

      let common = 1;
      for (const value of xSet) {
        if (ySet.has(value)) common = value;
      }

      const resultLine = (x * y) / common;
      outputs.push(resultLine);
    }

    setResult(outputs.join("\n"));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">1934</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          placeholder={"3\n1 45000\n6 10\n13 1755"}
        />
        <button
          type="submit"
          className="cursor-pointer rounded-2xl p-1 bg-slate-700 text-white text-sm"
        >
          제출하기
        </button>
      </form>

      {result && (
        <pre
          className="text-sm whitespace-pre-line"
          style={{ wordBreak: "break-word" }}
        >
          {result}
        </pre>
      )}

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
          <div className="pb-5 flex flex-col gap-2">
            <div>
              - <span className="bg-amber-200 font-semibold">textarea</span>:
              textarea 입력값은 항상 문자열
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz1934;
