import { useState } from "react";

const codeString1 = `import { useState } from "react";

const Quiz10809 = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const lowerCaseOnly = e.target.value.replace(/[^a-z]/g, "");
    setInputText(lowerCaseOnly);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const textLine = inputText.trim();

    const alphabet = Array(26).fill(-1);

    for (let i = 0; i < textLine.length; i++) {
      const current = textLine[i];
      const index = current.charCodeAt(0) - "a".charCodeAt(0);

      if (alphabet[index] === -1) {
        alphabet[index] = i;
      }
    }

    setResult(alphabet.join(" "));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">10809</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          value={inputText}
          className="w-80 border border-slate-300 rounded-lg bg-white py-1 px-2 text-sm"
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

export default Quiz10809;
`;

const codeString2 = `package day3;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

//알파벳 찾기
//https://www.acmicpc.net/problem/10809
public class java10809 {

    public static void main(String[] args) throws IOException {
        // 키보드 입력을 한 줄씩 읽기 위한 준비
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String textLine = br.readLine();

        int length = textLine.length();
        char[] text = textLine.toCharArray();

        int[] alphabet = new int[26];
        Arrays.fill(alphabet, -1);

        for (int i = 0; i < length; i++) {
            char current = text[i];

            int index = current - 'a';

            if (alphabet[index] == -1) {
                alphabet[index] = i;
            }
        }

        for (int i = 0; i < 26; i++) {
            System.out.print(alphabet[i] + " ");
        }
    }
}`;

const codeString3 = `// 알파벳 찾기
// https://www.acmicpc.net/problem/10809

const fs = require("fs");

// 입력 한 줄 읽기
const textLine = fs.readFileSync(0, "utf8").trim();

// 알파벳 위치 배열 (-1로 초기화)
const alphabet = Array(26).fill(-1);

// 문자열 순회
for (let i = 0; i < textLine.length; i++) {
  const current = textLine[i];
  const index = current.charCodeAt(0) - "a".charCodeAt(0);

  if (alphabet[index] === -1) {
    alphabet[index] = i;
  }
}

// 출력
console.log(alphabet.join(" "));
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

const Quiz10809 = () => {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const lowerCaseOnly = e.target.value.replace(/[^a-z]/g, "");
    setInputText(lowerCaseOnly);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const textLine = inputText.trim();

    const alphabet = Array(26).fill(-1);

    for (let i = 0; i < textLine.length; i++) {
      const current = textLine[i];
      const index = current.charCodeAt(0) - "a".charCodeAt(0);

      if (alphabet[index] === -1) {
        alphabet[index] = i;
      }
    }

    setResult(alphabet.join(" "));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">10809</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          value={inputText}
          className="w-80 border border-slate-300 rounded-lg bg-white py-1 px-2 text-sm"
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
              <span className="bg-amber-200 font-semibold">Array().fill()</span>
              : 배열 객체의 메서드
            </div>
            <div className="pl-4">
              <div>- 배열 크기: 26</div>
              <div>- 채울 값: -1</div>
            </div>

            <div>
              - <span className="bg-amber-200 font-semibold">charCodeAt()</span>
              : 특정 위치의 문자를 UTF-16 코드값
              <span className="text-green-700">(정수)</span>으로 반환함
            </div>
            <div className="pl-4">
              <div>- JavaScript 문자열 메서드</div>
              <div>- 반환 타입: number</div>
              <div>- index 범위를 벗어나면 NaN 반환</div>
            </div>
          </div>

          {/* 실제 사이트 제출용 코드 */}
          <div className="text-center text-sm">실제 제출용 (자바 코드)</div>
          <div className="w-full max-w-2xl my-4">
            <CodeViewer code={codeString2} />
          </div>
          <div className="pb-5 flex flex-col gap-2">
            <div>
              - <span className="bg-amber-200 font-semibold">Array.fill()</span>
              : Java 배열은 객체가 아님. 배열 관련 유틸은 Arrays 클래스에
              분리되어 있음
            </div>
            <div className="pl-4">
              <div>- 첫 번째 인자: 채울 대상 배열</div>{" "}
              <div>- 두 번째 인자: 채울 값</div>
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

export default Quiz10809;
