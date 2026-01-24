import { useState } from "react";

const codeString1 = `import { useState } from "react";

const Quiz28278 = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const input = inputValue.trim().split("\\n");

  const count = Number(input[0]);
  const stack = [];

  let line = 1;

  const outputs = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < count; i++) {
      const commandLine = input[line++];
      const hasSpace = commandLine.includes(" ");

      if (!hasSpace) {
        switch (commandLine) {
          case "2":
            if (stack.length === 0) {
              outputs.push(-1);
            } else {
              outputs.push(stack.pop());
            }
            break;

          case "3":
            outputs.push(stack.length);
            break;

          case "4":
            outputs.push(stack.length === 0 ? 1 : 0);
            break;

          case "5":
            if (stack.length === 0) {
              outputs.push(-1);
            } else {
              outputs.push(stack[stack.length - 1]);
            }
            break;
        }
      } else {
        const [, value] = commandLine.split(" ");
        stack.push(Number(value));
      }

      setResult(outputs.join("\\n"));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">28278</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-80 h-60 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          placeholder={"9\\n4\\n1 3\\n1 5\\n3\\n2\\n5\\n2\\n2\\n5"}
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

export default Quiz28278;`;

const codeString2 = `package day4;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

//스택
//https://www.acmicpc.net/problem/28278
public class Java28278 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int count = Integer.parseInt(br.readLine());

        List<Integer> list = new ArrayList<>();

        for(int i = 0; i < count; i++) {

            String input = br.readLine();
            boolean hasSpace = input.contains(" ");

            if (!hasSpace) {
                switch (input) {
                    case "2":
                        if (list.isEmpty()) {
                            System.out.println(-1);
                        } else {
                            System.out.println(list.remove(list.size() - 1));
                        }
                        break;
                    case "3":
                        System.out.println(list.size());
                        break;
                    case "4":
                        System.out.println(list.isEmpty()? 1 : 0);
                        break;
                    case "5":
                        if (list.isEmpty()) {
                            System.out.println(-1);
                        } else {
                            System.out.println(list.get(list.size() - 1));
                        }
                        break;
                }
            } else {
                String[] command = input.split(" ");
                int inputValue = Integer.parseInt(command[1]);
                list.add(inputValue);
            }

        }
    }
}`;

const codeString3 = `// 스택
// https://www.acmicpc.net/problem/28278

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\\n");

const count = Number(input[0]);
const stack = [];

let line = 1;

for (let i = 0; i < count; i++) {
  const commandLine = input[line++];
  const hasSpace = commandLine.includes(" ");

  if (!hasSpace) {
    switch (commandLine) {
      case "2":
        if (stack.length === 0) {
          console.log(-1);
        } else {
          console.log(stack.pop());
        }
        break;

      case "3":
        console.log(stack.length);
        break;

      case "4":
        console.log(stack.length === 0 ? 1 : 0);
        break;

      case "5":
        if (stack.length === 0) {
          console.log(-1);
        } else {
          console.log(stack[stack.length - 1]);
        }
        break;
    }
  } else {
    const [, value] = commandLine.split(" ");
    stack.push(Number(value));
  }
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

const Quiz28278 = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const boldCss = "font-semibold";
  const amberCss = "bg-amber-200 font-semibold";

  const input = inputValue.trim().split("\n");

  const count = Number(input[0]);
  const stack = [];

  let line = 1;

  const outputs = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < count; i++) {
      const commandLine = input[line++];
      const hasSpace = commandLine.includes(" ");

      if (!hasSpace) {
        switch (commandLine) {
          case "2":
            if (stack.length === 0) {
              outputs.push(-1);
            } else {
              outputs.push(stack.pop());
            }
            break;

          case "3":
            outputs.push(stack.length);
            break;

          case "4":
            outputs.push(stack.length === 0 ? 1 : 0);
            break;

          case "5":
            if (stack.length === 0) {
              outputs.push(-1);
            } else {
              outputs.push(stack[stack.length - 1]);
            }
            break;
        }
      } else {
        const [, value] = commandLine.split(" ");
        stack.push(Number(value));
      }

      setResult(outputs.join("\n"));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">28278</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-80 h-60 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          placeholder={"9\n4\n1 3\n1 5\n3\n2\n5\n2\n2\n5"}
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
              - <span className={amberCss}>remove</span>: 컬렉션에서 요소
              제거하는 메서드
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <div>- 인터페이스/구현체에 따라 동작 기준이 다름</div>
              <div className={boldCss}>Set / List 공통</div>
              <div className="pl-4 flex flex-col gap-2">
                <div>
                  <span className={amberCss}>remove(Object o)</span>
                </div>
                <div className="pl-4 flex flex-col gap-2">
                  <div>- 해당 값과 동일한 요소 제거</div>
                  <div>- 반환값: boolean</div>
                </div>
              </div>
              <div className={boldCss}>List 특이 사항</div>
              <div className="pl-4 flex flex-col gap-2">
                <div>
                  <span className={amberCss}>remove(int index)</span>
                </div>
                <div className="pl-4 flex flex-col gap-2">
                  <div>- 인덱스 기준 제거</div>
                  <div>- 반환값: 제거된 요소</div>
                  <div>- List에서 숫자 제거 시 오버로드 혼동 주의</div>
                  <div>- 값 제거를 원하면 Integer.valueOf 사용하는 게 안전</div>
                </div>
              </div>
            </div>
            <div>
              - <span className={amberCss}>isEmpty</span>: 컬렉션이 비어 있는지
              확인
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <div>- 반환값: boolean</div>
              <div>- size() == 0과 동일한 의미</div>
              <div>- 인터페이스/구현체에 따라 동작 기준이 다름</div>
              <div>- 가독성 좋음</div>
              <div>- 내부 구현 변경에 영향 없음</div>
            </div>
            <div>
              - <span className={amberCss}>size</span>: 컬렉션에 저장된 요소
              개수 반환
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <div>- 반환값: int</div>
              <div>- 실제 저장된 요소 수 기준</div>
              <div>
                - 배열의 length와 개념은 비슷하지만 size는 메서드 / length는
                필드
              </div>
            </div>

            {/* Node.js 코드 */}
            <div className="text-center text-sm">Node.js라면?</div>
            <div className="w-full max-w-2xl my-4">
              <CodeViewer code={codeString3} />
            </div>

            <div className="pb-5 flex flex-col gap-2">
              <div>
                - <span className={boldCss}>pop과 delete 차이</span>
              </div>
              <div className="pl-4 flex flex-col gap-2">
                <div>
                  <span className={amberCss}>pop</span> : 배열의 마지막 요소
                  제거
                </div>
                <div className="pl-4">
                  <div>- 원본 배열 변경</div>
                  <div>- 반환값 : 제거된 요소</div>
                  <div>- 배열 길이 감소</div>
                </div>
                <div>
                  <span className={amberCss}>delete</span> : 객체의 프로퍼티
                  또는 배열 슬롯 제거
                </div>
                <div className="pl-4">
                  <div>
                    배열에서 사용 시
                    <div className="pl-4">
                      <div>- 길이 변화 없음</div>
                      <div>- 배열에 빈 공간 발생</div>
                      <div>- 반복문, length 기준 로직에서 오류 유발 가능</div>
                    </div>
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

export default Quiz28278;
