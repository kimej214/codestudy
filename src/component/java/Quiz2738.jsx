import { useState } from "react";

const codeString1 = `import { useState } from "react";

const Quiz2738 = () => {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    // 숫자/공백/줄바꿈/마이너스만 허용
    const only = e.target.value.replace(/[^0-9\s-]/g, "");
    setInputText(only);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = inputText.trim().split(/\s+/);
    let idx = 0;

    const row = Number(input[idx++]);
    const column = Number(input[idx++]);

    const matrixA = Array.from({ length: row }, () =>
      Array.from({ length: column }, () => Number(input[idx++]))
    );

    const matrixB = Array.from({ length: row }, () =>
      Array.from({ length: column }, () => Number(input[idx++]))
    );

    let result = "";
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        result += matrixA[i][j] + matrixB[i][j] + " ";
      }
      result += "\\n";
    }

    setResult(result.trimEnd());
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">2738</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          onChange={handleChange}
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          placeholder={"3 3\\n1 1 1\\n2 2 2\\n0 1 0\\n3 3 3\\n4 4 4\\n5 5 100"}
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

export default Quiz238;
`;

const codeString2 = `package day3;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// 행렬 덧셈
// https://www.acmicpc.net/problem/2738
public class Java2738 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int row = Integer.parseInt(st.nextToken());
        int column = Integer.parseInt(st.nextToken());

        int[][] matrixA = new int[row][column];
        int[][] matrixB = new int[row][column];

        for (int i = 0; i < row; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < column; j++) {
                matrixA[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        for (int i = 0; i < row; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < column; j++) {
                matrixB[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        StringBuilder numMatrixSum = new StringBuilder();
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < column; j++) {
                numMatrixSum.append(matrixA[i][j] + matrixB[i][j]).append(" ");
            }
            numMatrixSum.append("\n");
        }

        System.out.print(numMatrixSum);
    }
}`;

const codeString3 = `const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
let idx = 0;

// 행, 열
const row = Number(input[idx++]);
const column = Number(input[idx++]);

// 행렬 A
const matrixA = Array.from({ length: row }, () =>
  Array.from({ length: column }, () => Number(input[idx++]))
);

// 행렬 B
const matrixB = Array.from({ length: row }, () =>
  Array.from({ length: column }, () => Number(input[idx++]))
);

// 결과 출력
let result = "";
for (let i = 0; i < row; i++) {
  for (let j = 0; j < column; j++) {
    result += matrixA[i][j] + matrixB[i][j] + " ";
  }
  result += "\\n";
}

console.log(result.trimEnd());
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

const Quiz2738 = () => {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    // 숫자/공백/줄바꿈/마이너스만 허용
    const only = e.target.value.replace(/[^0-9\s-]/g, "");
    setInputText(only);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = inputText.trim().split(/\s+/);
    let idx = 0;

    const row = Number(input[idx++]);
    const column = Number(input[idx++]);

    const matrixA = Array.from({ length: row }, () =>
      Array.from({ length: column }, () => Number(input[idx++]))
    );

    const matrixB = Array.from({ length: row }, () =>
      Array.from({ length: column }, () => Number(input[idx++]))
    );

    let result = "";
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        result += matrixA[i][j] + matrixB[i][j] + " ";
      }
      result += "\n";
    }

    setResult(result.trimEnd());
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">2738</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          onChange={handleChange}
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          placeholder={"3 3\n1 1 1\n2 2 2\n0 1 0\n3 3 3\n4 4 4\n5 5 100"}
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

          <div className="pb-5 flex flex-col gap-2">
            <div>
              -{" "}
              <span className="bg-amber-200 font-semibold">
                Array.from(유사배열객체, 매핑함수)
              </span>
            </div>
            <div className="pl-4">
              <div>
                - 첫 번째 인자: 길이
                <span className="text-green-700">(length)</span>만 있는 객체도
                가능
              </div>
              <div>- 두 번째 인자: 각 요소를 어떻게 채울지 정하는 함수</div>
              <div>
                -{" "}
                <span className="bg-amber-200 font-semibold">
                  {"{ length: 값 }"}
                </span>{" "}
                : 자바스크립트 배열은 내부적으로 length 속성을 가짐
              </div>
              <div className="pl-4 gap-2">
                <div>- Array.from은 length가 있으면 그 길이만큼 반복</div>
                <div>- 배열이 아니라 배열처럼 생긴 객체</div>
              </div>
            </div>
            <div>
              - <span className="bg-amber-200 font-semibold">trimEnd()</span>:
              문자열 끝부분에 있는 공백 문자만 제거
            </div>
            <div className="pl-4">
              <div>
                - 문자열<span className="text-green-700">(String)</span>의
                메서드
              </div>
              <div>- 원본 문자열은 변경되지 않고, 새 문자열을 반환</div>
              <div>- 제거 대상: 공백 , 탭, 줄바꿈 문자</div>
            </div>
          </div>

          {/* 실제 사이트 제출용 코드 */}
          <div className="text-center text-sm">실제 제출용 (자바 코드)</div>
          <div className="w-full max-w-2xl my-4">
            <CodeViewer code={codeString2} />
          </div>
          <div className="pb-5 flex flex-col gap-2">
            <div>
              - <span className="bg-amber-200 font-semibold">append()</span> :
              문자열 뒤에 값을 이어 붙이는 기능
            </div>
            <div className="pl-4">
              <div>- StringBuilder의 메서드</div>
              <div>- 기존 문자열을 새로 만들지 않고 내부에 계속 추가함</div>
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

export default Quiz2738;
