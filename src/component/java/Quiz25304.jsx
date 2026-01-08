import { useState } from "react";

const codeString1 = `
import { useState } from "react";

const Quiz25304 = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 줄 단위 분리 + 앞뒤 공백 제거 + 빈 줄 제거
    const lines = inputValue
      .split(/\\r?\\n/)
      .map((value) => value.trim())
      .filter((value) => value.length > 0);

    if (lines.length < 2) {
      setResult("입력이 부족합니다 (총금액/품목개수 필요)");
      return;
    }

    const totalMoney = Number(lines[0]);
    const itemTotalCount = Number(lines[1]);

    if (!Number.isFinite(totalMoney) || !Number.isInteger(totalMoney)) {
      setResult("총금액이 숫자가 아닙니다");
      return;
    }
    if (
      !Number.isFinite(itemTotalCount) ||
      !Number.isInteger(itemTotalCount) ||
      itemTotalCount < 0
    ) {
      setResult("품목개수가 올바르지 않습니다");
      return;
    }

    if (lines.length !== 2 + itemTotalCount) {
      setResult("품목 줄 개수가 맞지 않습니다");
      return;
    }

    let calculSum = 0;

    for (let i = 0; i < itemTotalCount; i++) {
      const line = lines[2 + i];

      // 가격 + 공백(1칸 이상) + 개수
      const match = line.match(/^(\\d+)\\s+(\\d+)$/);
      if (!match) {
        setResult("품목 입력 형식이 올바르지 않습니다 (예: 20000 5)");
        return;
      }

      const price = Number(match[1]);
      const count = Number(match[2]);

      calculSum += price * count;
    }

    setResult(calculSum === totalMoney ? "Yes" : "No");
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-2">25304</div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          value={inputValue}
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={"260000\\n4\\n20000 5\\n30000 2\\n10000 6\\n5000 8"}
        />

        <button
          type="submit"
          className="cursor-pointer rounded-2xl p-2 bg-slate-700 text-white text-sm"
        >
          제출하기
        </button>
      </form>

      {result && <div className="text-sm">{result}</div>}
    </div>
  );
};

export default Quiz25304;`;

const codeString2 = `
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// 영수증
// https://www.acmicpc.net/problem/25304
public class Java25304 {
    public static void main(String[] args) throws IOException {
        // 키보드 입력을 한 줄씩 읽기 위한 준비
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 첫줄: 영수증에 적힌 총 금액
        String totalMoneyLine = br.readLine();
        int totalMoney = Integer.parseInt(totalMoneyLine);

        // 두번째 줄: 물건 종류 개수
        String countLine = br.readLine();
        int itemTotalCount = Integer.parseInt(countLine);

        // 실제 계산된 금액을 저장할 변수
        int calculSum = 0;

        // 물건 개수만큼 반복하면서 가격 계산
        for (int i = 0; i < itemTotalCount; i++) {

            // 한 줄 입력 (예: "20000 5")
            String itemLine = br.readLine();

            // 공백 기준으로 나누기
            String[] itemInfo = itemLine.split(" ");

            int price = Integer.parseInt(itemInfo[0]); // 가격
            int count = Integer.parseInt(itemInfo[1]); // 개수

            // 가격*개수 계산해서 누적
            calculSum += price * count;
        }

        // 계산한 합계와 영수증 총액 비교
        System.out.print(calculSum == totalMoney ? "Yes" : "No");
    }
}
`;

const codeString3 = `
const fs = require("fs");

// 표준 입력 전체 읽기
const input = fs.readFileSync(0, "utf8").trim().split("\\n");

// 첫 줄: 영수증에 적힌 총 금액
const totalMoneyLine = input[0];
const totalMoney = Number(totalMoneyLine);

// 두 번째 줄: 물건 종류 개수
const countLine = input[1];
const itemTotalCount = Number(countLine);

// 실제 계산된 금액을 저장할 변수
let calculSum = 0;

// 물건 개수만큼 반복하면서 가격 계산
for (let i = 0; i < itemTotalCount; i++) {
  // 한 줄 입력 (예: "20000 5")
  const itemLine = input[i + 2];

  // 공백 기준으로 나누기
  const itemInfo = itemLine.split(" ");

  const price = Number(itemInfo[0]); // 가격
  const count = Number(itemInfo[1]); // 개수

  // 가격 * 개수 계산해서 누적
  calculSum += price * count;
}

// 계산한 합계와 영수증 총액 비교
console.log(calculSum === totalMoney ? "Yes" : "No");
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

const Quiz25304 = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 줄 단위 분리 + 앞뒤 공백 제거 + 빈 줄 제거
    const lines = inputValue
      .split(/\r?\n/)
      .map((value) => value.trim())
      .filter((value) => value.length > 0);

    if (lines.length < 2) {
      setResult("입력이 부족합니다 (총금액/품목개수 필요)");
      return;
    }

    const totalMoney = Number(lines[0]);
    const itemTotalCount = Number(lines[1]);

    if (!Number.isFinite(totalMoney) || !Number.isInteger(totalMoney)) {
      setResult("총금액이 숫자가 아닙니다");
      return;
    }
    if (
      !Number.isFinite(itemTotalCount) ||
      !Number.isInteger(itemTotalCount) ||
      itemTotalCount < 0
    ) {
      setResult("품목개수가 올바르지 않습니다");
      return;
    }

    if (lines.length !== 2 + itemTotalCount) {
      setResult("품목 줄 개수가 맞지 않습니다");
      return;
    }

    let calculSum = 0;

    for (let i = 0; i < itemTotalCount; i++) {
      const line = lines[2 + i];

      // 가격 + 공백(1칸 이상) + 개수
      const match = line.match(/^(\d+)\s+(\d+)$/);
      if (!match) {
        setResult("품목 입력 형식이 올바르지 않습니다 (예: 20000 5)");
        return;
      }

      const price = Number(match[1]);
      const count = Number(match[2]);

      calculSum += price * count;
    }

    setResult(calculSum === totalMoney ? "Yes" : "No");
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-2">25304</div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          value={inputValue}
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={"260000\n4\n20000 5\n30000 2\n10000 6\n5000 8"}
        />

        <button
          type="submit"
          className="cursor-pointer rounded-2xl p-2 bg-slate-700 text-white text-sm"
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

export default Quiz25304;
