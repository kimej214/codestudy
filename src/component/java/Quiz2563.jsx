import { useState } from "react";

const codeString1 = `import { useState } from "react";

const Quiz2563 = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = inputValue.trim().split(/\\s+/);

    let idx = 0;
    const count = Number(input[idx++]);

    // 도화지 (100x100)
    const paper = Array.from({ length: 100 }, () => Array(100).fill(false));

    // 색종이 붙이기
    for (let i = 0; i < count; i++) {
      const x = Number(input[idx++]);
      const y = Number(input[idx++]);

      // 색종이 영역 채우기 (10x10)
      for (let r = x; r < x + 10; r++) {
        for (let c = y; c < y + 10; c++) {
          paper[r][c] = true;
        }
      }
    }

    // 검은 영역 넓이 계산
    let area = 0;
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        if (paper[i][j]) area++;
      }
    }

    setResult(area);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">2745</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          onChange={(e) => setInputValue(e.target.value)}
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          placeholder={"3\\n3 7\\n15 7\\n5 2"}
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

export default Quiz2563;
`;

const codeString2 = `package day2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// 색종이
// https://www.acmicpc.net/problem/2563
public class Java2563 {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int count = Integer.parseInt(br.readLine());

        // 도화지 (100x100)
        boolean[][] paper = new boolean[100][100];

        for (int i = 0; i < count; i++) {

            String line = br.readLine();
            StringTokenizer st = new StringTokenizer(line);

            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());

            // 색종이 영역 채우기 (10x10)
            for (int r = x; r < x + 10; r++) {
                for (int c = y; c < y + 10; c++) {
                    paper[r][c] = true;
                }
            }
        }

        // 검은 영역 넓이 계산
        int area = 0;
        for (int i = 0; i < 100; i++) {
            for (int j = 0; j < 100; j++) {
                if (paper[i][j]) {
                    area++;
                }
            }
        }

        System.out.println(area);
    }
}`;

const codeString3 = `const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\\s+/);

let idx = 0;
const count = Number(input[idx++]);

// 도화지 (100x100)
const paper = Array.from({ length: 100 }, () =>
  Array(100).fill(false)
);

// 색종이 붙이기
for (let i = 0; i < count; i++) {
  const x = Number(input[idx++]);
  const y = Number(input[idx++]);

  // 색종이 영역 채우기 (10x10)
  for (let r = x; r < x + 10; r++) {
    for (let c = y; c < y + 10; c++) {
      paper[r][c] = true;
    }
  }
}

// 검은 영역 넓이 계산
let area = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (paper[i][j]) area++;
  }
}

console.log(area);
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

const Quiz2563 = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = inputValue.trim().split(/\s+/);

    let idx = 0;
    const count = Number(input[idx++]);

    // 도화지 (100x100)
    const paper = Array.from({ length: 100 }, () => Array(100).fill(false));

    // 색종이 붙이기
    for (let i = 0; i < count; i++) {
      const x = Number(input[idx++]);
      const y = Number(input[idx++]);

      // 색종이 영역 채우기 (10x10)
      for (let r = x; r < x + 10; r++) {
        for (let c = y; c < y + 10; c++) {
          paper[r][c] = true;
        }
      }
    }

    // 검은 영역 넓이 계산
    let area = 0;
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        if (paper[i][j]) area++;
      }
    }

    setResult(area);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">2745</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          onChange={(e) => setInputValue(e.target.value)}
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          placeholder={"3\n3 7\n15 7\n5 2"}
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
                StringTokenizer
              </span>
              : 문자열을 구분자 기준으로 잘라서 토큰
              <span className="text-green-700">(token)</span> 단위로 처리하는
              클래스
            </div>
            <div className="pl-4">
              <div>- java.util 패키지</div>
              <div>- 공백, 콤마 등으로 구분된 문자열 파싱</div>
              <div>- 입력 한 줄에서 여러 값 분리할 때 사용</div>
              <div>
                - 오래된 클래스
                <span className="text-green-700">(legacy 성격)</span>
              </div>
              <div>- 현재는 String.split 또는 Scanner 사용이 더 권장</div>
              <div>- split과 달리 정규식 사용 불가</div>
            </div>
            <div>
              - <span className="bg-amber-200 font-semibold">nextToken()</span>:
              다음 토큰 하나를 꺼내는 메서드
            </div>
            <div className="pl-4">
              <div>- 호출할 때마다 내부 포인터가 다음으로 이동</div>
              <div>- 반환 타입: String</div>
              <div>- 동작 방식: 더 이상 토큰이 없으면 예외 발생 가능</div>
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

export default Quiz2563;
