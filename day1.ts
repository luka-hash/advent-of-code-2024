import "./utils.ts";

function part1(input: string) {
  const lines = input.lines();
  const side1 = [];
  const side2 = [];

  for (const line of lines) {
    const parts = line.fields();
    side1.push(parts[0].toInt());
    side2.push(parts[1].toInt());
  }

  side1.sort();
  side2.sort();

  let acc = 0;

  for (let i = 0; i < lines.length; i += 1) {
    acc += Math.abs(side1[i] - side2[i]);
  }

  console.log(acc);
}

function part2(input: string) {
  const side1 = new Map<number, number>();
  const side2 = new Map<number, number>();

  for (const line of input.lines()) {
    const parts = line.fields();
    const [left, right] = [
      parts[0].toInt(),
      parts[1].toInt(),
    ];

    if (side1.has(left)) {
      side1.set(left, side1.get(left)! + 1);
    } else {
      side1.set(left, 1);
    }

    if (side2.has(right)) {
      side2.set(right, side2.get(right)! + 1);
    } else {
      side2.set(right, 1);
    }
  }

  let left_score = 0;
  for (const key of side1.keys()) {
    if (side2.has(key)) {
      left_score += key * side2.get(key)! * side1.get(key)!;
    }
  }
  console.log(left_score);
}

if (import.meta.main) {
  const input = Deno.readTextFileSync("input/day1.txt");
  const testInput = Deno.readTextFileSync("input/day1test.txt");
  part1(testInput);
  part1(input);
  part2(testInput);
  part2(input);
}
