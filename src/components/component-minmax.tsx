import { minMax } from "../utils/minmax";

const min = (a: number, b: number) => (a < b ? a : b);
const max = (a: number, b: number) => (a > b ? a : b);

export interface MinMaxProps {
  nums: number[];
}

interface SingleMinMaxProps {
  minVal: number;
  maxVal: number;
  firstVal?: number;
  secondVal?: number;
}

const SingleMinMax = ({
  minVal,
  maxVal,
  firstVal,
  secondVal,
}: SingleMinMaxProps) => {
  const textWhiteOutlineMin = {
    color: "black",
    backgroundImage: "linear-gradient(#ffffff80,transparent)",
  };
  const textWhiteOutlineMax = {
    color: "black",
    backgroundImage: "linear-gradient(transparent,#ffffff80)",
  };
  return (
    <div className="flex flex-col items-center justify-center w-max mx relative">
      {typeof firstVal !== "undefined" && (
        <div className="w-full flex [&>*]:flex-grow text-center">
          <span className="bg-white border-2 border-black">{firstVal}</span>
          {typeof secondVal !== "undefined" && (
            <span className="bg-white border-2 border-black">{secondVal}</span>
          )}
        </div>
      )}
      <div className="flex flex-col my-auto">
        <span
          style={{ ...textWhiteOutlineMin }}
          className="px-2 rounded-t-sm m-1 mb-0"
        >
          min: {minVal}
        </span>
        <span
          style={{ ...textWhiteOutlineMax }}
          className="px-2 rounded-b-sm m-1 mt-0 "
        >
          max: {maxVal}
        </span>
      </div>
    </div>
  );
};

export const MinMax = ({ nums }: MinMaxProps) => {
  if (!nums.length) return <></>;
  const [a, b = a, ...rest] = nums;
  console.log(a, b, rest);
  const minVal = a < b ? a : b;
  const maxVal = a > b ? a : b;
  let firstMinMax: number[],
    secondMinMax: number[],
    totalMinMax: number[] = [];
  if (!!rest.length) {
    firstMinMax = a < b ? [a, b] : [b, a];
    secondMinMax = minMax(rest);
    totalMinMax = [
      min(firstMinMax[0], secondMinMax[0]),
      max(firstMinMax[1], secondMinMax[1]),
    ];
  }
  return (
    <div>
      <div className="flex">
        <SingleMinMax
          firstVal={a}
          secondVal={nums[1]}
          minVal={minVal}
          maxVal={maxVal}
        />
        <div className="bg-[#11111111] border-b-red-500 border-b-[1px]">
          {!!rest.length && <MinMax nums={rest} />}
        </div>
      </div>
      {!!rest.length && (
        <div className="border-t-gray-800 border-t-[1px] mt-1 flex justify-center">
          <SingleMinMax minVal={totalMinMax[0]} maxVal={totalMinMax[1]} />
        </div>
      )}
    </div>
  );
};
