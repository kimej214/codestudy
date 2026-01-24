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

export default Quiz28278;
