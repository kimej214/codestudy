import { useState } from "react";

const codeString1 = `import { useState } from "react";

const Quiz26069 = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = input.trim().split("\\n");
    const n = Number(lines[0]);

    const dance = new Set();
    dance.add("ChongChong");

    for (let i = 1; i <= n; i++) {
      const [a, b] = lines[i].trim().split(" ");

      if (dance.has(a) || dance.has(b)) {
        dance.add(a);
        dance.add(b);
      }
    }

    setResult(String(dance.size));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">26069</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          placeholder={
            "12\\nbnb2011 chansol\\nchansol chogahui05\\nchogahui05 jthis\\njthis ChongChong\\njthis jyheo98\\njyheo98 lms0806\\nlms0806 pichulia\\npichulia pjshwa\\npjshwa r4pidstart\\nr4pidstart swoon\\nswoon tony9402\\ntony9402 bnb2011"
          }
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

export default Quiz26069;
`;

const codeString2 = `package day5;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;

//붙임성 좋은 총총이
//https://www.acmicpc.net/problem/26069
public class Java26069 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int inputLineCount = Integer.parseInt(br.readLine());

        Set<String> dance = new HashSet<>();
        dance.add("ChongChong");

        for (int i = 0; i < inputLineCount; i++) {
            String[] line = br.readLine().split(" ");
            String a = line[0];
            String b = line[1];

            if (dance.contains(a) || dance.contains(b)) {
                dance.add(a);
                dance.add(b);
            }
        }

        System.out.println(dance.size());
    }
}`;

const codeString3 = `// 붙임성 좋은 총총이
// https://www.acmicpc.net/problem/26069

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\\n");

const n = Number(input[0]);

const dance = new Set();
dance.add("ChongChong");

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].trim().split(" ");

  if (dance.has(a) || dance.has(b)) {
    dance.add(a);
    dance.add(b);
  }
}

console.log(dance.size);`;

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

const Quiz26069 = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = input.trim().split("\n");
    const n = Number(lines[0]);

    const dance = new Set();
    dance.add("ChongChong");

    for (let i = 1; i <= n; i++) {
      const [a, b] = lines[i].trim().split(" ");

      if (dance.has(a) || dance.has(b)) {
        dance.add(a);
        dance.add(b);
      }
    }

    setResult(String(dance.size));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">26069</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          placeholder={
            "12\nbnb2011 chansol\nchansol chogahui05\nchogahui05 jthis\njthis ChongChong\njthis jyheo98\njyheo98 lms0806\nlms0806 pichulia\npichulia pjshwa\npjshwa r4pidstart\nr4pidstart swoon\nswoon tony9402\ntony9402 bnb2011\n"
          }
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
              - <span className="bg-amber-200 font-semibold">HashSet</span> :
              중복을 허용하지 않는 집합 자료구조
              <div className="pl-4 flex flex-col gap-2">
                - 내부적으로 해시 기반 구조 사용
                <div>
                  - 주요 메서드
                  <div className="pl-4 flex flex-col gap-2">
                    <div>- add(E): 요소 추가</div>
                    <div>- contains(Object): 요소 존재 여부 확인</div>
                    <div>- remove(Object): 요소 제거</div>
                    <div>- size(): 개수</div>
                  </div>
                </div>
                <div>
                  - 특징
                  <div className="pl-4 flex flex-col gap-2">
                    <div>- 순서 보장 안 됨</div>
                    <div>- 평균 시간복잡도 O(1)</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              - <span className="bg-amber-200 font-semibold">contains</span> :
              Set 안에 동등한 객체가 있는지 확인
              <div className="pl-4 flex flex-col gap-2">
                <div>- hashCode() 비교</div>
                <div>- hashCode가 같으면 equals()로 최종 비교</div>
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
              - <span className="bg-amber-200 font-semibold">has</span> :처음에
              배열 크기가 정해지기 때문에 int[] 배열로 풀 수 있음
              <div className="pl-4 flex flex-col gap-2">
                <div>- SameValueZero 비교 방식 사용</div>
                <div>- 기본 타입은 값 비교</div>
                <div>- 객체는 참조 비교</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz26069;
