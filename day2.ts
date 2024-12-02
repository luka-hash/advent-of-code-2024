import "./utils.ts";

function part1(input: string) {
  const levels = [];
  for (const line of input.lines()) {
    levels.push(line.fields().map((s) => s.toInt()));
  }
  let result = 0;
  for (const level of levels) {
    if (
      (level[0] > level[1] && isDecreasing(level)) ||
      (level[0] < level[1] && isIncreasing(level))
    ) {
      result += 1;
    }
  }
  console.log(result);
}

function part2(input: string) {
  const levels = [];
  for (const line of input.lines()) {
    levels.push(line.fields().map((s) => s.toInt()));
  }
  let result = 0;
  for (const level of levels) {
    if (
      isSafe(level)
    ) {
      result += 1;
    } else {
      for (let i = 0; i < level.length; i += 1) {
        if (isSafe(level.slice(0, i).concat(level.slice(i + 1)))) {
          result += 1;
          break;
        }
      }
    }
  }
  console.log(result);
}

function isSafe(level: number[]): boolean {
  if (
    (level[0] > level[1] && isDecreasing(level)) ||
    (level[0] < level[1] && isIncreasing(level))
  ) {
    return true;
  }
  return false;
}

function isIncreasing(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
    if ((arr[i + 1] - arr[i]) > 3) {
      return false;
    }
  }
  return true;
}
function isDecreasing(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] <= arr[i + 1]) {
      return false;
    }
    if ((arr[i] - arr[i + 1]) > 3) {
      return false;
    }
  }
  return true;
}

if (import.meta) {
  const input = Deno.readTextFileSync("input/day2.txt");
  const testInput = Deno.readTextFileSync("input/day2test.txt");
  part1(testInput);
  part1(input);
  part2(testInput);
  part2(input);
}
