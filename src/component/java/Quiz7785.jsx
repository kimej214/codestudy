import { useState } from "react";

const codeString1 = `import { useState } from "react";

const Quiz7785 = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = inputValue.trim().split("\\n");

    const num = Number(input[0]);

    const set = new Set();

    for (let i = 1; i <= num; i++) {
      const [name, commute] = input[i].split(" ");

      if (commute === "enter") {
        set.add(name);
      } else {
        set.delete(name);
      }
    }

    const resultValue = Array.from(set).sort().reverse();

    setResult(resultValue.join("\\n"));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">7785</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          placeholder={"4\\nBaha enter\\nAskar enter\\nBaha leave\\nArtem enter"}
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

export default Quiz7785;
`;

const codeString2 = `package day4;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.TreeSet;

//회사에 있는 사람
//https://www.acmicpc.net/problem/7785
public class Java7785 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());

        TreeSet<String> list = new TreeSet<>();

        for (int i = 0; i < num; i++) {
            String[] member = br.readLine().split(" ");
            String name = member[0];
            String commute = member[1];

            if (commute.equals("enter")) {
                list.add(name);
            } else {
                list.remove(name);
            }
        }

        for (String name : list.descendingSet()) {
            System.out.println(name);
        }
    }
}
`;

const codeString3 = `// 회사에 있는 사람
// https://www.acmicpc.net/problem/7785

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\\n");

const num = Number(input[0]);

// Java TreeSet<String> 대응 → Set + 정렬
const set = new Set();

for (let i = 1; i <= num; i++) {
  const [name, commute] = input[i].split(" ");

  if (commute === "enter") {
    set.add(name);
  } else {
    set.delete(name);
  }
}

// TreeSet의 descendingSet() 대응
const result = Array.from(set).sort().reverse();

for (const name of result) {
  console.log(name);
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

const Quiz7785 = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const boldCss = "font-semibold";
  const amberCss = "bg-amber-200 font-semibold";
  const greenCss = "text-green-700";

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = inputValue.trim().split("\n");

    const num = Number(input[0]);

    const set = new Set();

    for (let i = 1; i <= num; i++) {
      const [name, commute] = input[i].split(" ");

      if (commute === "enter") {
        set.add(name);
      } else {
        set.delete(name);
      }
    }

    const resultValue = Array.from(set).sort().reverse();

    setResult(resultValue.join("\n"));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">7785</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-80 h-40 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          placeholder={"4\nBaha enter\nAskar enter\nBaha leave\nArtem enter"}
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
              - <span className={amberCss}>descendingSet</span>: TreeSet에서만
              제공되는 메서드
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <div>
                - 기존 TreeSet을 내림차순으로 바라보는 뷰
                <span className={greenCss}>(View)</span> 반환
              </div>
              <div>- 새로운 Set을 복사 생성하는 것이 아님</div>
              <div>- 원본 TreeSet과 연결된 뷰</div>
              <div>- descendingSet에서 제거 → 원본에서도 제거됨</div>
              <div>- HashSet, LinkedHashSet에서는 사용 불가</div>
            </div>

            <div>
              -{" "}
              <span className={boldCss}>
                remove와 비슷한 메서드 차이{" "}
                <span className={greenCss}>(Set 기준)</span>
              </span>
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <div>
                <span className={amberCss}>remove(Object o)</span>
              </div>
              <div className="pl-4">
                <div>- 해당 요소가 있으면 삭제</div>
                <div>- 반환값: boolean</div>
              </div>
              <div>
                <span className={amberCss}>clear()</span>
              </div>
              <div className="pl-4">
                <div>- 모든 요소 제거</div>
              </div>
              <div>
                <span className={amberCss}>removeAll(Collection c)</span>
              </div>
              <div className="pl-4">
                <div>- 전달한 컬렉션에 포함된 요소만 제거</div>
              </div>
              <div>
                <span className={amberCss}>retainAll(Collection c)</span>
              </div>
              <div className="pl-4">
                <div>- 전달한 컬렉션에 포함된 것만 유지</div>
                <div>- 나머지는 제거</div>
              </div>
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <span className={boldCss}>상황별 메서드 정리</span>
              <div className="pl-4 flex flex-col gap-2">
                <div>
                  - 하나 제거: <span className={amberCss}>remove</span>
                </div>
                <div>
                  - 여러 개 제거: <span className={amberCss}>removeAll</span>
                </div>
                <div>
                  - 교집합만 남김: <span className={amberCss}>retainAll</span>
                </div>
                <div>
                  - 전부 제거: <span className={amberCss}>clear</span>
                </div>
              </div>
            </div>

            <div>
              - <span className={boldCss}>add랑 put 차이</span>
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <div>
                <span className={amberCss}>put (Map)</span>
              </div>
              <div className="pl-4">
                <div>- key-value 구조</div>
                <div>- 동일 key가 있으면 value 덮어씀</div>
                <div>
                  - 이전 value 반환{" "}
                  <span className={greenCss}>(없으면 null)</span>
                </div>
              </div>
              <div>
                <span className={amberCss}>add (Set)</span>
              </div>
              <div className="pl-4">
                <div>- 중복 허용 안 함</div>
                <div>- 이미 존재하면 false 반환</div>
                <div>- 값 하나만 관리</div>
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
              - <span className={amberCss}>delete</span>: 객체
              <span className={greenCss}>(Object)</span> 또는 Map, Set에서
              요소를 제거하는 데 사용
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <div>- 사용 대상에 따라 동작 방식이 다름</div>
              <div className={boldCss}>
                객체<span className={greenCss}>(Object)</span>에서 delete
              </div>
              <div className="pl-4">
                <div>- 객체의 프로퍼티 자체를 제거</div>
                <div>- 성공 여부와 관계없이 boolean 반환</div>
                <div>- 존재하지 않는 키 delete 사용시 오류 없음</div>
                <div>- 배열 요소에 사용시 빈 슬롯 발생</div>
                <div>- 배열 길이: 줄어들지 않음</div>
              </div>
              <div className={boldCss}>Map에서 delete</div>
              <div className="pl-4">
                <div>- key 기준으로 삭제</div>
                <div>- 반환값: boolean</div>
              </div>
              <div className={boldCss}>Set에서 delete</div>
              <div className="pl-4">
                <div>- 값 기준으로 삭제</div>
                <div>- 반환값: boolean</div>
              </div>
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <div className={boldCss}>상황별 메서드 정리 </div>
              <div className="pl-4 flex flex-col gap-2">
                <div>객체 프로퍼티 제거</div>
                <div className="pl-4 flex flex-col gap-2">
                  <div>
                    - <span className={amberCss}>delete</span>
                  </div>
                  <div>
                    - <span className={amberCss}>Reflect.deleteProperty</span>
                  </div>
                </div>
                <div>배열 요소 제거</div>
                <div className="pl-4 flex flex-col gap-2">
                  <div>
                    - <span className={amberCss}>splice</span>{" "}
                    <span className={greenCss}>(원본 수정)</span>
                  </div>
                  <div>
                    - <span className={amberCss}>filter</span>{" "}
                    <span className={greenCss}>(원본 유지)</span>
                  </div>
                </div>
                <div>
                  Set / Map 단일 요소 제거:{" "}
                  <span className={amberCss}>delete</span>
                </div>
                <div>
                  Set / Map 전체 제거: <span className={amberCss}>clear</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz7785;
