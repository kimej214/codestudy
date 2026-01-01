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
        <button className="rounded-2xl p-1 bg-slate-700 text-white text-sm">
          제출하기
        </button>
      </form>
    </div>
  );
};

export default Quiz10926;
