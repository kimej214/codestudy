import { useState } from "react";

const codeString1 = `import { useState } from "react";

const Quiz1436 = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const inputNum = Number(input);

  let count = 0;
  let num = 666;

  const handleSubmit = (e) => {
    e.preventDefault();

    while (true) {
      const text = String(num);

      if (text.includes("666")) {
        count++;

        if (count === inputNum) {
          setResult(num);
          break;
        }
      }

      num++;
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">1436</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-slate-300 rounded-lg bg-white py-1 px-2 text-sm"
          placeholder={"187"}
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

export default Quiz1436;`;

const codeString2 = `package day4;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// 영화감독 숌
// https://www.acmicpc.net/problem/1436
public class java1436 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int inputNum = Integer.parseInt(br.readLine());

        int count = 0;
        int num = 666;

        while (true) {
            String text = Integer.toString(num);

            if (text.contains("666")) {
                count++;

                if (count == inputNum) {
                    System.out.println(num);
                    break;
                }
            }

            num++;
        }
    }
}`;

const codeString3 = `// 영화감독 숌
// https://www.acmicpc.net/problem/1436

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const inputNum = Number(input);

let count = 0;
let num = 666;

while (true) {
  const text = String(num);

  if (text.includes("666")) {
    count++;

    if (count === inputNum) {
      console.log(num);
      break;
    }
  }

  num++;
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

const Quiz1436 = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const inputNum = Number(input);

  let count = 0;
  let num = 666;

  const handleSubmit = (e) => {
    e.preventDefault();

    while (true) {
      const text = String(num);

      if (text.includes("666")) {
        count++;

        if (count === inputNum) {
          setResult(num);
          break;
        }
      }

      num++;
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">1436</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-slate-300 rounded-lg bg-white py-1 px-2 text-sm"
          placeholder={"187"}
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
                Integer.toString(값)
              </span>
              : 숫자를 문자열로 바꿈
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <div>해당 메서드를 다르게 표현하고 싶다면?</div>
              <div className="pl-4">
                <div>
                  -{" "}
                  <span className="bg-amber-200 font-semibold">
                    String.valueOf(값)
                  </span>
                </div>
                <div>
                  - <span className="bg-amber-200 font-semibold">+ ""</span> :
                  앞에 빈 문자열을 붙여 문자열로 만듦
                </div>
              </div>
            </div>
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

export default Quiz1436;
