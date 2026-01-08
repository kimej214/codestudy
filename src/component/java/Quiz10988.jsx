import { useState } from "react";

const codeString1 = `import { useState } from "react";

const Quiz10988 = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const getLength = (id) => {
    let length = 0;
    for (const char of id) {
      if (/^[a-z]$/.test(char)) length += 1;
    }
    return length;
  };

  const handleChange = (e) => {
    const lowercaseOnly = e.target.value.replace(/[^a-z]/g, "");
    const len = getLength(inputValue);
    if (len > 100) {
      alert("입력값은 영문 100자를 넘기면 안됩니다");
      return;
    }
    setInputValue(lowercaseOnly);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const length = inputValue.length;

    const reversedText = new Array(length);

    // 뒤집기
    for (let i = length - 1; i >= 0; i--) {
      reversedText[length - 1 - i] = inputValue[i];
    }

    let isPalindrome = true;

    // 원본 문자열과 뒤집은 배열 비교
    for (let i = 0; i < length; i++) {
      if (inputValue[i] !== reversedText[i]) {
        isPalindrome = false;
        break;
      }
    }
    setResult(isPalindrome ? 1 : 0);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">10988</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          value={inputValue}
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
  );
};

export default Quiz10988;
`;

const codeString2 = `import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

//팰린드롬인지 확인하기
//https://www.acmicpc.net/problem/10988
public class java10988 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String text = br.readLine();
        int length = text.length();

        char[] reversedText = new char[length];

        // 뒤집기
        for (int i = length - 1; i >= 0; i--) {
            reversedText[length - 1 - i] = text.charAt(i);
        }

        boolean isPalindrome = true;

        // 원본 문자열과 뒤집은 배열 비교
        for (int i = 0; i < length; i++) {
            if (text.charAt(i) != reversedText[i]) {
                isPalindrome = false;
                break;
            }
        }

        System.out.println(isPalindrome ? 1 : 0);
    }
}
`;

const codeString3 = `
const fs = require("fs");

// 입력 받기
const text = fs.readFileSync(0, "utf8").trim();
const length = text.length;

// 뒤집은 문자열을 담을 배열
const reversedText = new Array(length);

// 뒤집기
for (let i = length - 1; i >= 0; i--) {
  reversedText[length - 1 - i] = text[i];
}

let isPalindrome = true;

// 원본 문자열과 뒤집은 배열 비교
for (let i = 0; i < length; i++) {
  if (text[i] !== reversedText[i]) {
    isPalindrome = false;
    break;
  }
}

// 결과 출력
console.log(isPalindrome ? 1 : 0);
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

const Quiz10988 = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const getLength = (id) => {
    let length = 0;
    for (const char of id) {
      if (/^[a-z]$/.test(char)) length += 1;
    }
    return length;
  };

  const handleChange = (e) => {
    const lowercaseOnly = e.target.value.replace(/[^a-z]/g, "");
    const len = getLength(inputValue);
    if (len > 100) {
      alert("입력값은 영문 100자를 넘기면 안됩니다");
      return;
    }
    setInputValue(lowercaseOnly);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const length = inputValue.length;

    const reversedText = new Array(length);

    // 뒤집기
    for (let i = length - 1; i >= 0; i--) {
      reversedText[length - 1 - i] = inputValue[i];
    }

    let isPalindrome = true;

    // 원본 문자열과 뒤집은 배열 비교
    for (let i = 0; i < length; i++) {
      if (inputValue[i] !== reversedText[i]) {
        isPalindrome = false;
        break;
      }
    }
    setResult(isPalindrome ? 1 : 0);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">10988</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          value={inputValue}
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

export default Quiz10988;
