import { useState } from "react";

const codeString1 = `
import { useState } from "react";

const Quiz10926 = () => {
  const [idInput, setIdInput] = useState("");

  const getLength = (id) => {
    let length = 0;
    for (const char of id) {
      if (/^[a-z]$/.test(char)) length += 1;
    }
    return length;
  };

  const handleChange = (e) => {
    const lowercaseOnly = e.target.value.replace(/[^a-z]/g, "");
    setIdInput(lowercaseOnly);
  };

  const handleSubmitId = (e) => {
    e.preventDefault();
    const duplicateData = ["test", "joonas", "baekjoon"];

    const len = getLength(idInput);
    if (len > 50) {
      alert("아이디는 영문 50자를 넘기면 안됩니다");
      return;
    }

    const isDuplicate = duplicateData.includes(idInput);

    if (isDuplicate) {
      setIdInput(idInput + "??!");
      return;
    }
  };
};

export default Quiz10926;
`;

const codeString2 = `
const fs = require("fs");

const idInput = fs.readFileSync(0, "utf8").trim();

const getLength = (id) => {
  let length = 0;
  for (const char of id) {
    if (/^[a-z]$/.test(char)) length += 1;
  }
  return length;
};

const handleSubmitId = (id) => {
  const len = getLength(id);
  if (len > 50) {
    return;
  }

  console.log(id + "??!");
};

handleSubmitId(idInput);
`;

const codeString3 = `
import java.util.Scanner;

public class Main {

    static int getLength(String id) {
        int length = 0;
        for (char c : id.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                length++;
            }
        }
        return length;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String id = sc.nextLine();

        if (getLength(id) > 50) {
            return;
        }

        System.out.println(id + "??!");
    }
}
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

const Quiz10926 = () => {
  const [idInput, setIdInput] = useState("");
  const [open, setOpen] = useState(false);

  const getLength = (id) => {
    let length = 0;
    for (const char of id) {
      if (/^[a-z]$/.test(char)) length += 1;
    }
    return length;
  };

  const handleChange = (e) => {
    const lowercaseOnly = e.target.value.replace(/[^a-z]/g, "");
    setIdInput(lowercaseOnly);
  };

  const handleSubmitId = (e) => {
    e.preventDefault();
    const duplicateData = ["test", "joonas", "baekjoon"];

    const len = getLength(idInput);
    if (len > 50) {
      alert("아이디는 영문 50자를 넘기면 안됩니다");
      return;
    }

    const isDuplicate = duplicateData.includes(idInput);

    if (isDuplicate) {
      setIdInput(idInput + "??!");
      return;
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2">10926</div>
      <form
        onSubmit={handleSubmitId}
        className="flex flex-row gap-2 items-center"
      >
        <div>ID</div>
        <div>
          <input
            type="text"
            value={idInput}
            onChange={handleChange}
            className="border border-slate-300 rounded-lg bg-white py-1 px-2 text-sm"
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer rounded-2xl p-1 bg-slate-700 text-white text-sm"
        >
          제출하기
        </button>
      </form>
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
          <div className="text-center text-sm">
            실제 제출용 (Node.js 실행 코드)
          </div>
          <div className="w-full max-w-2xl my-4">
            <CodeViewer code={codeString2} />
          </div>

          <div className="pb-5 flex flex-col gap-2">
            <div>
              - <span className="bg-amber-200 font-semibold">require()</span>:
              Node.js에서 제공하는 모듈 로딩 함수
            </div>
            <div className="pl-4">
              - <span className="font-semibold">"fs"</span>: File System의 약자.
              파일을 읽고, 쓰고, 삭제하는 기능들을 모아둔 Node.js 기본 모듈
            </div>
            <div>
              -{" "}
              <span className="bg-amber-200 font-semibold">readFileSync()</span>
              : fs 모듈 안에 정의된 기본 메서드. 동기방식으로 파일을 읽음
            </div>
            <div className="pl-4 flex flex-col">
              <div>
                - <span className="font-semibold">0</span>: stdin (입력)
              </div>
              <div>
                - <span className="font-semibold">1</span>: stdout (출력)
              </div>
              <div>
                - <span className="font-semibold">2</span>: stderr (에러 출력)
              </div>
            </div>
          </div>

          {/* 자바 코드 */}
          <div className="text-center text-sm">자바라면?</div>
          <div className="w-full max-w-2xl my-4">
            <CodeViewer code={codeString3} />
          </div>

          <div className="pb-10 flex flex-col gap-2">
            <div>
              -{" "}
              <span className="bg-amber-200 font-semibold">toCharArray()</span>:
              문자열을 문자 배열로 변환
            </div>
            <div>
              - <span className="bg-amber-200 font-semibold">nextLine()</span>:
              엔터를 기준으로 한 줄 전체를 문자열
              <span className="text-green-700">(String)</span>로 읽음{" "}
              <span className="text-green-700">(공백 포함)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz10926;
