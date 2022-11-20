const min = (a:number, b:number) => a<b ? a : b
const max = (a:number, b:number) => a>b ? a : b

export const minMax = (nums: number[]):number[] => {
    if (nums.length === 2) {
        const [a,b] = nums;
        if (a<b) return [a,b]
        return [b,a]
    } else if (nums.length === 1) {
        const [a] = nums;
        return [a,a];
    }
    const [a,b, ...rest] = nums;
    let firstMinMax = a<b ? [a,b] : [b,a];
    let secondMinMax = minMax(rest)
    return [min(firstMinMax[0],secondMinMax[0]),max(firstMinMax[1],secondMinMax[1])]
}