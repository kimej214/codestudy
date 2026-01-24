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
  const boldCss = "font-semibold";
  const amberCss = "bg-amber-200 font-semibold";

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

          <div className="pb-5 flex flex-col gap-2">
            <div>
              - <span className={amberCss}>Set</span>: 숫자를 문자열로 바꿈
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <div className={boldCss}>Set 공통 특징</div>
              <div className="pl-4">
                <div>- 중복 허용 안 함</div>
                <div>
                  - 순서 보장 안 함{" "}
                  <span className="text-green-700">(일부 구현체 제외)</span>
                </div>
                <div>- 인덱스 접근 불가</div>
              </div>
              <div>
                <span className={amberCss}>HashSet</span>
              </div>
              <div className="pl-4">
                <div>- 내부 구조: 해시 기반</div>
                <div>- 저장 순서: 보장 안됨</div>
                <div>- 성능: 가장 빠름 O(1)</div>
                <div>- 사용 상황: 순서 필요 없고, 성능이 중요할 때</div>
              </div>
              <div>
                <span className={amberCss}>LinkedHashSet</span>
              </div>
              <div className="pl-4">
                <div>- 내부 구조: 해시 + 연결 리스트</div>
                <div>- 저장 순서: 입력 순서 유지</div>
                <div>- 성능: HashSet보다 약간 느림</div>
                <div>- 사용 상황: 중복 제거 + 입력 순서 유지 필요</div>
              </div>
              <div>
                <span className={amberCss}>TreeSet</span>
              </div>
              <div className="pl-4">
                <div>
                  - 내부 구조: 이진 탐색 트리{" "}
                  <span className="text-green-700">(Red-Black Tree)</span>
                </div>
                <div>- 저장 순서: 자동 정렬</div>
                <div>- 성능: O(log n)</div>
                <div>- 사용 상황: 정렬된 상태로 유지 필요</div>
              </div>
            </div>
          </div>

          {/* Node.js 코드 */}
          <div className="text-center text-sm">Node.js라면?</div>
          <div className="w-full max-w-2xl my-4">
            <CodeViewer code={codeString3} />
          </div>

          <div className="pb-5 flex flex-col gap-2">
            <div>
              - <span className={amberCss}>Array.from(set)</span>: Set 객체를
              Array로 변환
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <div>- Set에는 sort 메서드가 없음</div>
              <div>- 중복 제거된 값들이 배열로 변환됨</div>
              <div className={boldCss}>자바 Set 차이</div>
              <div className="pl-4 flex flex-col gap-2">
                <div className={boldCss}>공통점</div>
                <div className="pl-4">
                  <div>- 중복 제거</div>
                  <div>- 순수 집합 개념</div>
                </div>
                <div className={boldCss}>차이점</div>
                <div className="pl-4 flex flex-col gap-2">
                  <div className={boldCss}>자바 Set</div>
                  <div className="pl-4">
                    <div>- 인터페이스 기반</div>
                    <div>
                      - 구현체 선택 필요{" "}
                      <span className="text-green-700">
                        (HashSet, TreeSet 등)
                      </span>
                    </div>
                    <div>- 정렬, 순서 여부가 구현체에 따라 다름</div>
                  </div>
                  <div className={boldCss}>자바스크립트 Set</div>
                  <div className="pl-4">
                    <div>- 단일 구현</div>
                    <div>- 입력 순서 유지</div>
                    <div>- 정렬 기능 없음</div>
                    <div>- 배열로 변환 후 처리 필요</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz2750;
