import "./utils.ts";

function part1(input: string) {
}

function part2(input: string) {
}

if (import.meta) {
  const input = Deno.readTextFileSync("input/day2.txt");
  const testInput = Deno.readTextFileSync("input/day2test.txt");
  part1(testInput);
  part1(input);
  part2(testInput);
  part2(input);
}
