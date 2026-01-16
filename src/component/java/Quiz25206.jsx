import { useState } from "react";

const codeString1 = `import { useState } from "react";

const Quiz25206 = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = inputValue.trim().split("\\n");

    // (학점 × 평점) 누적
    let totalDegreeSum = 0;
    // 학점 누적
    let totalCredit = 0;

    for (let i = 0; i < 20; i++) {
      const line = input[i].trim();
      const degreeInfo = line.split(" ");

      const credit = Number(degreeInfo[1]);
      const rank = degreeInfo[2];
      let degree = 0;

      switch (rank) {
        case "A+":
          degree = 4.5;
          break;
        case "A0":
          degree = 4.0;
          break;
        case "B+":
          degree = 3.5;
          break;
        case "B0":
          degree = 3.0;
          break;
        case "C+":
          degree = 2.5;
          break;
        case "C0":
          degree = 2.0;
          break;
        case "D+":
          degree = 1.5;
          break;
        case "D0":
          degree = 1.0;
          break;
        case "F":
          degree = 0.0;
          break;
        case "P":
          continue;
      }

      totalDegreeSum += credit * degree;
      totalCredit += credit;
    }

    const result = totalDegreeSum / totalCredit;

    setResult(result.toFixed(6));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">25206</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={
            "ObjectOrientedProgramming1 3.0 A+\\nIntroductiontoComputerEngineering 3.0 A+"
          }
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

export default Quiz25206;
`;

const codeString2 = `package day3;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// 너의 평점은
// https://www.acmicpc.net/problem/25206
public class Java25206 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // (학점 × 평점) 누적
        double totalDegreeSum = 0;
        // 학점 누적
        double totalCredit = 0;

        for (int i = 0; i < 20; i++) {

            String degreeLine = br.readLine();
            String[] degreeInfo = degreeLine.split(" ");

            double credit = Double.parseDouble(degreeInfo[1]);
            String rank = degreeInfo[2];
            double degree = 0;

            switch (rank) {
                case "A+":
                    degree = 4.5;
                    break;
                case "A0":
                    degree = 4.0;
                    break;
                case "B+":
                    degree = 3.5;
                    break;
                case "B0":
                    degree = 3.0;
                    break;
                case "C+":
                    degree = 2.5;
                    break;
                case "C0":
                    degree = 2.0;
                    break;
                case "D+":
                    degree = 1.5;
                    break;
                case "D0":
                    degree = 1.0;
                    break;
                case "F":
                    degree = 0.0;
                    break;
                case "P":
                    continue;
            }

            totalDegreeSum += credit * degree;
            totalCredit += credit;
        }

        double result = totalDegreeSum / totalCredit;
        System.out.printf("%.6f%n",result);
    }
}
`;

const codeString3 = `const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\\n");

// (학점 × 평점) 누적
let totalDegreeSum = 0;
// 학점 누적
let totalCredit = 0;

for (let i = 0; i < 20; i++) {
  const line = input[i].trim();
  const degreeInfo = line.split(" ");

  const credit = Number(degreeInfo[1]);
  const rank = degreeInfo[2];
  let degree = 0;

  switch (rank) {
    case "A+":
      degree = 4.5;
      break;
    case "A0":
      degree = 4.0;
      break;
    case "B+":
      degree = 3.5;
      break;
    case "B0":
      degree = 3.0;
      break;
    case "C+":
      degree = 2.5;
      break;
    case "C0":
      degree = 2.0;
      break;
    case "D+":
      degree = 1.5;
      break;
    case "D0":
      degree = 1.0;
      break;
    case "F":
      degree = 0.0;
      break;
    case "P":
      continue;
  }

  totalDegreeSum += credit * degree;
  totalCredit += credit;
}

const result = totalDegreeSum / totalCredit;
console.log(result.toFixed(6));
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

const Quiz25206 = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = inputValue.trim().split("\n");

    // (학점 × 평점) 누적
    let totalDegreeSum = 0;
    // 학점 누적
    let totalCredit = 0;

    for (let i = 0; i < 20; i++) {
      const line = input[i].trim();
      const degreeInfo = line.split(" ");

      const credit = Number(degreeInfo[1]);
      const rank = degreeInfo[2];
      let degree = 0;

      switch (rank) {
        case "A+":
          degree = 4.5;
          break;
        case "A0":
          degree = 4.0;
          break;
        case "B+":
          degree = 3.5;
          break;
        case "B0":
          degree = 3.0;
          break;
        case "C+":
          degree = 2.5;
          break;
        case "C0":
          degree = 2.0;
          break;
        case "D+":
          degree = 1.5;
          break;
        case "D0":
          degree = 1.0;
          break;
        case "F":
          degree = 0.0;
          break;
        case "P":
          continue;
      }

      totalDegreeSum += credit * degree;
      totalCredit += credit;
    }

    const result = totalDegreeSum / totalCredit;

    setResult(result.toFixed(6));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">25206</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={
            "ObjectOrientedProgramming1 3.0 A+\nIntroductiontoComputerEngineering 3.0 A+"
          }
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
              - <span className="bg-amber-200 font-semibold">toFixed()</span>:
              소수점 이하 자릿수를 고정하여 문자열
              <span className="text-green-700">(String)</span>로 반환함
            </div>
            <div className="pl-4">
              <div>- JavaScript Number 객체의 메서드</div>
              <div>- 반올림 수행함</div>
              <div>- 대상: Number</div>
              <div>
                - 인자: 소수점 이하 자릿수{" "}
                <span className="text-green-700">(정수)</span>
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
              - <span className="bg-amber-200 font-semibold">%.nf</span>: 소수점
              n자리까지 반올림
            </div>
            <div>
              - <span className="bg-amber-200 font-semibold">int</span>: 정수만
            </div>
            <div className="pl-4">
              <div>- Integer.parseInt(String)</div>
            </div>
            <div>
              - <span className="bg-amber-200 font-semibold">float</span>: 끝에
              f를 써야함
            </div>
            <div className="pl-4">
              <div>- int 값은 float에 자동 형변환 가능</div>
              <div>
                - 정밀도 낮음{" "}
                <span className="text-green-700">(소수점 오차 큼)</span>
              </div>
              <div>- Float.parseFloat(String)</div>
              <div>
                - Integer.parseInt(String)로 받으면 터짐
                <span className="text-green-700"> ("3.0", "4.5" 문제)</span>
              </div>
            </div>
            <div>
              - <span className="bg-amber-200 font-semibold">double</span>: 정수
              + 실수 둘 다 가능
            </div>
            <div className="pl-4">
              <div>- 정밀도 높음</div>
              <div>- Double.parseDouble(String)</div>
              <div>- 학점, 평균, 계산 로직에 적합</div>
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

export default Quiz25206;
