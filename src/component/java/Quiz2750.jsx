import { useState } from "react";

const codeString1 = `import { useState } from "react";

const Quiz2750 = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = inputValue.trim().split("\\n");
    const numLine = Number(input[0]);

    const set = new Set();

    for (let i = 1; i <= numLine; i++) {
      set.add(Number(input[i]));
    }

    const resultValue = Array.from(set).sort((a, b) => a - b);

    // 줄바꿈 문자열로 누적
    setResult(resultValue.join("\\n"));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">2750</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          placeholder={"5\\n5\\n2\\n3\\n4\\n1"}
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
          className="text-sm pre-wraps"
          style={{
            wordBreak: "break-word",
          }}
        >
          {result}
        </pre>
      )}
    </div>
  );
};

export default Quiz2750;`;

const codeString2 = `package day4;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Set;
import java.util.TreeSet;

// 수 정렬하기
// https://www.acmicpc.net/problem/2750
public class Java2750 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int numLine = Integer.parseInt(br.readLine());
        Set<Integer> list = new TreeSet<>();

        for(int i=0; i<numLine ; i++){
            int numText = Integer.parseInt(br.readLine());
            list.add(numText);
        }
        for (int value : list) {
            System.out.println(value);
        }
    }
}`;

const codeString3 = `// 수 정렬하기
// https://www.acmicpc.net/problem/2750

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\\n");

const numLine = Number(input[0]);

// Java TreeSet<Integer> 대응 → Set + 정렬
const set = new Set();

for (let i = 1; i <= numLine; i++) {
  set.add(Number(input[i]));
}

// TreeSet의 오름차순 정렬 대응
const result = Array.from(set).sort((a, b) => a - b);

for (const value of result) {
  console.log(value);
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

const Quiz2750 = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = inputValue.trim().split("\n");
    const numLine = Number(input[0]);

    const set = new Set();

    for (let i = 1; i <= numLine; i++) {
      set.add(Number(input[i]));
    }

    const resultValue = Array.from(set).sort((a, b) => a - b);

    // 줄바꿈 문자열로 누적
    setResult(resultValue.join("\n"));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">2750</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          placeholder={"5\n5\n2\n3\n4\n1"}
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
          className="text-sm pre-wraps"
          style={{
            wordBreak: "break-word",
          }}
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
        </div>
      )}
    </div>
  );
};

export default Quiz2750;
