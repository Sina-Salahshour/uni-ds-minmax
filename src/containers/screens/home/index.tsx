import { useId } from "react";
import { useState } from "react";
import { MinMax } from "../../../components/component-minmax";

const HomeScreen = () => {
  const [text, setText] = useState("");
  const inputId = useId();
  const nums = !text
    ? []
    : text
        .split(" ")
        .filter((val) => !!val)
        .map(Number)
        .filter(Number.isFinite);
  return (
    <div className="flex flex-col items-center h-[100vh] pt-4 ipad:pt-10 bg-slate-400">
      <label
        htmlFor={inputId}
        className="font-semibold text-lg px-2 text-center"
      >
        Enter list of numbers separated by space:
      </label>
      <div className="px-4 w-full">
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="bg-slate-500 w-full text-center text-white rounded-xl my-2"
          type="text"
          id={inputId}
        />
      </div>
      <div className="w-full overflow-x-scroll ">
        <div className="w-fit mx-auto bg-white">
          <MinMax nums={nums} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
