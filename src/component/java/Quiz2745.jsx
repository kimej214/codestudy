import { useState } from "react";

const codeString1 = `import { useState } from "react";

const Quiz2745 = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const upperDigitAndSpaceOnly = e.target.value.replace(/[^A-Z0-9 ]/g, "");
    setInputText(upperDigitAndSpaceOnly);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 입력 전체 읽기
    const input = inputText.trim();
    const [value, numeralSystemStr] = input.split(" ");

    const numeralSystem = Number(numeralSystemStr);

    let placeValue = 0;

    for (const c of value) {
      let digit;

      if (c >= "0" && c <= "9") {
        digit = c.charCodeAt(0) - "0".charCodeAt(0);
      } else {
        digit = c.charCodeAt(0) - "A".charCodeAt(0) + 10;
      }

      placeValue = placeValue * numeralSystem + digit;
    }

    setResult(placeValue);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">2745</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          value={inputText}
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
      {result && <div className="text-sm">{result}</div>}
    </div>
  );
};

export default Quiz2745;
`;

const codeString2 = `package day3;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// 진법 변환
// https://www.acmicpc.net/problem/2745
public class Java2745 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());
        String value = st.nextToken();
        int numeralSystem = Integer.parseInt(st.nextToken());

        char[] text = value.toCharArray();
        int placeValue = 0;

        for (char c : text) {
            int digit;

            if (c >= '0' && c <= '9') {
                digit = c - '0';
            } else {
                digit = c - 'A' + 10;
            }
            placeValue = placeValue * numeralSystem + digit;
        }

        System.out.println(placeValue);
    }
}`;

const codeString3 = `const fs = require("fs");

// 입력 전체 읽기
const input = fs.readFileSync(0, "utf8").trim();
const [value, numeralSystemStr] = input.split(" ");

const numeralSystem = Number(numeralSystemStr);

let placeValue = 0;

for (const c of value) {
  let digit;

  if (c >= '0' && c <= '9') {
    digit = c.charCodeAt(0) - '0'.charCodeAt(0);
  } else {
    digit = c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
  }

  placeValue = placeValue * numeralSystem + digit;
}

console.log(placeValue);
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

const Quiz2745 = () => {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const upperDigitAndSpaceOnly = e.target.value.replace(/[^A-Z0-9 ]/g, "");
    setInputText(upperDigitAndSpaceOnly);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 입력 전체 읽기
    const input = inputText.trim();
    const [value, numeralSystemStr] = input.split(" ");

    const numeralSystem = Number(numeralSystemStr);

    let placeValue = 0;

    for (const c of value) {
      let digit;

      if (c >= "0" && c <= "9") {
        digit = c.charCodeAt(0) - "0".charCodeAt(0);
      } else {
        digit = c.charCodeAt(0) - "A".charCodeAt(0) + 10;
      }

      placeValue = placeValue * numeralSystem + digit;
    }

    setResult(placeValue);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">2745</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          value={inputText}
          className="border border-slate-300 rounded-lg bg-white py-1 px-2 text-sm"
          onChange={handleChange}
          placeholder="ZZZZZ 36"
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

          <div className="pb-5 flex flex-col gap-2">
            <div>
              -{" "}
              <span className="bg-amber-200 font-semibold">
                for (const 변수 of 반복 가능한 객체) {"{ }"}
              </span>{" "}
              : iterable 객체만 가능
            </div>
            <div className="pl-4">
              <div>- 인덱스 접근 불가</div>
              <div>- 값 자체를 바로 꺼냄</div>
              <div>
                - 비교:
                <div className="pl-4">
                  <div>
                    -{" "}
                    <span className="bg-amber-200 font-semibold">for...of</span>{" "}
                    : 값
                  </div>
                  <div>
                    -{" "}
                    <span className="bg-amber-200 font-semibold">for...in</span>{" "}
                    : 키<span className="text-green-700">(인덱스)</span>
                  </div>
                </div>
              </div>
            </div>
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
                for (타입 변수 : 컬렉션) {"{ }"}
              </span>{" "}
              : 향상된 for문. 컬렉션 요소를 하나씩 순회하기 위한 문법
            </div>
            <div className="pl-4">
              <div>
                - 배열, Collection
                <span className="text-green-700">(List, Set 등)</span> 순회 가능
              </div>
              <div>- 인덱스 접근 불가</div>
              <div>- 내부적으로 Iterator 사용</div>
              <div>- 읽기 전용에 가까움</div>
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

export default Quiz2745;
