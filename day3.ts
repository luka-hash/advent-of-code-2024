import "./utils.ts";

function part1(input: string) {
  const mul = new RegExp(`mul\\(([0-9]{1,3}),([0-9]{1,3})\\)`, "g");
  let sum = 0;
  for (const command of input.matchAll(mul)) {
    const [_, a, b] = command;
    const result = parseInt(a) * parseInt(b);
    sum += result;
  }
  console.log(sum);
}

function part2(input: string) {
  const mul = new RegExp(`mul\\(([0-9]{1,3}),([0-9]{1,3})\\)`, "g");
  const dos = new RegExp(`do\\(\\)`, "g");
  const donts = new RegExp(`don't\\(\\)`, "g");
  let allowed = true;
  let sum = 0;
  const mul_matches = input.matchAll(mul).toArray();
  const dos_matches = input.matchAll(dos).toArray();
  const donts_matches = input.matchAll(donts).toArray();
  const all_matches = mul_matches.concat(dos_matches).concat(donts_matches);
  all_matches.sort((a, b) => a.index - b.index);
  for (const match of all_matches) {
    const [command, _] = match;
    switch (command) {
      case "do()":
        allowed = true;
        break;
      case "don't()":
        allowed = false;
        break;
      default:
        if (allowed) {
          const [_, a, b] = match;
          const result = parseInt(a) * parseInt(b);
          sum += result;
        }
    }
  }
  console.log(sum);
}

if (import.meta.main) {
  const input = Deno.readTextFileSync("input/day3.txt").trim();
  const testInput = Deno.readTextFileSync("input/day3test.txt").trim();
  const testInput2 = Deno.readTextFileSync("input/day3test2.txt").trim();
  part1(testInput);
  part1(input);
  part2(testInput2);
  part2(input);
}
