import { useState } from "react";

const codeString1 = `
import { useState } from "react";

const Quiz2675 = () => {
  const [text, setText] = useState("2\\t\\n3\\t\\n4\\t\\n5\\t");
  const qrCode = /^[0-9A-Z$%*+\\-.\\:\\/]*$/;

  const maxLength = 20;

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = text.split(/\\r?\\n/);
    const outputs = [];

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      // 숫자만 있는 줄이면 일단 건너뜀
      if (/^\\d+$/.test(trimmed)) continue;

      // 반복수 + 공백(1칸 이상) + 문자열
      const match = trimmed.match(/^(\\d+)\\s+(.+)$/);
      if (!match) {
        setText("제출 형식이 올바르지 않습니다");
        return;
      }

      const repeat = Number(match[1]);
      const str = match[2].trim();

      // 입력 문자열 길이 제한
      if (str.length > maxLength) {
        setText("입력 문자열은 20자를 넘을 수 없습니다");
        return;
      }

      if (!qrCode.test(str)) {
        setText("허용되지 않은 문자가 포함되어 있습니다");
        return;
      }

      const repeated = [...str].map((char) => char.repeat(repeat)).join("");
      outputs.push(repeated);
    }

    setText(outputs.join("\\n"));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">2675</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          className="w-50 h-25 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="rounded-2xl p-1 bg-slate-700 text-white text-sm">
          제출하기
        </button>
      </form>
    </div>
  );
};

export default Quiz2675;
`;

const codeString2 = `
const fs = require("fs");

const text = fs.readFileSync(0, "utf8").trim();
const lines = text.split(/\\r?\\n/);

const T = Number(lines[0]); // 첫 줄: 테스트케이스 개수
const outputs = [];

for (let i = 1; i <= T; i++) {
  const line = (lines[i] ?? "").trim();

  // R + 공백 + S 형태 잡기
  const match = line.match(/^(\\d+)\\s+(.+)$/);

  if (!match) continue;

  const repeat = Number(match[1]);
  const str = match[2];

  // 문자열을 문자 단위로 쪼개서 repeat만큼 반복 후 합치기
  const repeated = [...str].map((char) => char.repeat(repeat)).join("");
  outputs.push(repeated);
}

process.stdout.write(outputs.join("\\n"));
`;

const codeString3 = `
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws Exception {

        // 입력 전체를 줄 단위로 읽기
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<String> lines = new ArrayList<>();

        String line;
        while ((line = br.readLine()) != null) {
            lines.add(line.trim());
        }

        // 첫 줄: 테스트케이스 개수
        int T = Integer.parseInt(lines.get(0));

        List<String> outputs = new ArrayList<>();

        // 1번 줄부터 T개 처리
        for (int i = 1; i <= T; i++) {
            String current = lines.get(i);

            // "숫자 + 공백 + 문자열" 형태
            String[] parts = current.split("\\s+", 2);
            int repeat = Integer.parseInt(parts[0]);
            String str = parts[1];

            // 문자열 반복
            StringBuilder sb = new StringBuilder();
            for (char ch : str.toCharArray()) {
                for (int r = 0; r < repeat; r++) {
                    sb.append(ch);
                }
            }

            outputs.add(sb.toString());
        }

        // 출력
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < outputs.size(); i++) {
            result.append(outputs.get(i));
            if (i < outputs.size() - 1) {
                result.append("\\n");
            }
        }

        System.out.print(result.toString());
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

const Quiz2675 = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("2\t\n3\t\n4\t\n5\t");
  const qrCode = /^[0-9A-Z$%*+\-.\:\/]*$/;

  const maxLength = 20;

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = text.split(/\r?\n/);
    const outputs = [];

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      // 숫자만 있는 줄이면 일단 건너뜀
      if (/^\d+$/.test(trimmed)) continue;

      // 반복수 + 공백(1칸 이상) + 문자열
      const match = trimmed.match(/^(\d+)\s+(.+)$/);
      if (!match) {
        setText("제출 형식이 올바르지 않습니다");
        return;
      }

      const repeat = Number(match[1]);
      const str = match[2].trim();

      // 입력 문자열 길이 제한
      if (str.length > maxLength) {
        setText("입력 문자열은 20자를 넘을 수 없습니다");
        return;
      }

      if (!qrCode.test(str)) {
        setText("허용되지 않은 문자가 포함되어 있습니다");
        return;
      }

      const repeated = [...str].map((char) => char.repeat(repeat)).join("");
      outputs.push(repeated);
    }

    setText(outputs.join("\n"));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2">2675</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          className="w-50 h-25 border border-slate-300 rounded-lg bg-white py-2 px-2 text-sm"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="rounded-2xl p-1 bg-slate-700 text-white text-sm">
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

          <div className="pb-5 flex flex-col gap-2">
            <div>
              - <span className="bg-amber-200 font-semibold">split</span>: 기준
              문자로 여러 조각으로 나눔
            </div>
            <div className="pl-4">
              <div>- 결과는 배열. 기준 문자는 사라짐</div>
              <div>
                - <span className="bg-amber-200 font-semibold">slice</span>{" "}
                차이: 시작~끝 위치로 잘라냄
                <span className="text-green-700">(음수 인덱스 가능)</span>.
                결과는 문자열
              </div>
              <div>
                - <span className="bg-amber-200 font-semibold">substring</span>{" "}
                차이: slice랑 거의 같지만 규칙이 더 단순한 옛 방식
              </div>
            </div>
            <div>
              - <span className="bg-amber-200 font-semibold">match</span>: 이
              문자열이 이 정규식 패턴과 맞는지 검사
            </div>
            <div className="pl-4">
              <div>
                - 맞으면 배열<span className="text-green-700">(Array)</span>
              </div>
              <div>- 안 맞으면 null</div>
              <div>
                - <span className="bg-amber-200 font-semibold">includes</span>{" "}
                차이: includes는 그 글자가 들어 있나
                <span className="text-green-700">(true)</span>, 없나
                <span className="text-green-700">(false)</span>
              </div>
            </div>
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
              -{" "}
              <span className="bg-amber-200 font-semibold">
                process.stdout.write
              </span>
              : 콘솔<span className="text-green-700">(화면)</span>에 글자를
              출력하는 함수
            </div>
            <div className="pl-4">
              <div>- 출력만 담당</div>
              <div>- 줄바꿈 자동 안됨</div>
              <div> - 내가 \n을 직접 써야 줄이 바뀜</div>
              <div> - console.log보다 빠름</div>
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
              <span className="bg-amber-200 font-semibold">BufferedReader</span>
              : 입력을 한 줄씩 빠르게 읽기 위한 도구
            </div>
            <div className="pl-4 flex flex-col">
              <div>- Scanner보다 빠름</div>
              <div>
                - 입력을 문자열<span className="text-green-700">(String)</span>{" "}
                로 읽음
              </div>
            </div>
            <div>
              -{" "}
              <span className="bg-amber-200 font-semibold">
                InputStreamReader(System.in)
              </span>
              : 키보드 입력<span className="text-green-700">(System.in)</span>을
              문자로 바꿔주는 변환기
            </div>
            <div className="pl-4">
              <div>
                - <span className="bg-amber-200 font-semibold">System.in</span>:
                원래 바이트 단위 입력
              </div>{" "}
              <div>
                - 바이트에서 문자
                <span className="text-green-700">(String)</span> 변환한 뒤 읽음{" "}
              </div>
            </div>
            <div>
              - <span className="bg-amber-200 font-semibold">readLine()</span>:
              엔터 전까지 한 줄을 읽는 메서드
            </div>
            <div className="pl-4 flex flex-col">
              <div>- 한 줄씩 읽음</div>
              <div>- 반환 타입: String</div>
              <div>- 더 이상 입력이 없으면 null 반환</div>
            </div>
            <div>
              - <span className="bg-amber-200 font-semibold">parseInt()</span>:
              문자열 숫자를 진짜 숫자로 바꾸기
            </div>
            <div>
              -{" "}
              <span className="bg-amber-200 font-semibold">
                StringBuilder()
              </span>
              : 문자열을 계속 이어 붙이기 위한 도구
            </div>
            <div className="pl-4 flex flex-col">
              <div>
                - String은 불변
                <span className="text-green-700">(immutable)</span>. 연산 많이
                쓰면 느려짐
              </div>
              <div>- StringBuilder는 빠름</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz2675;
