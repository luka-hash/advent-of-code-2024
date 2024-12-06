import "./utils.ts";

function part1(input: string) {
  const parts = input.trim().split("\n\n");
  const order = new Map<number, number[]>();
  for (const pair of parts[0].lines()) {
    const [a, b] = pair.split("|").map((s) => s.toInt());
    if (order.has(a)) {
      order.set(a, order.get(a)!.concat(b));
    } else {
      order.set(a, [b]);
    }
  }
  let sum = 0;
  for (const line of parts[1].lines()) {
    const update = line.split(",").map((s) => s.toInt());
    let correct = true;
    outer: for (let i = 0; i < update.length; i += 1) {
      const page = update[i];
      if (order.has(page)) {
        for (const other of order.get(page)!) {
          if (update.indexOf(other) !== -1 && update.indexOf(other) < i) {
            correct = false;
            break outer;
          }
        }
      }
    }
    if (correct) {
      sum += update[Math.floor(update.length / 2)];
    }
  }
  console.log(sum);
}

function part2(input: string) {
  const parts = input.trim().split("\n\n");
  const order = new Map<number, number[]>();
  for (const pair of parts[0].lines()) {
    const [a, b] = pair.split("|").map((s) => s.toInt());
    order.set(a, [...(order.get(a) || []), b]);
  }
  parts[1].lines().map((line) => {
    const update = line.split(",").map((s) => s.toInt());
    for (let i = 0; i < update.length; i += 1) {
      const page = update[i];
      if (order.has(page)) {
        for (const other of order.get(page)!) {
          if (update.indexOf(other) !== -1 && update.indexOf(other) < i) {
            return update;
          }
        }
      }
    }
    return [];
  }).filter((update) => update.length > 0).map((update) => {
    outer: for (let i = 0; i < update.length;) {
      const page = update[i];
      if (order.has(page)) {
        for (const other of order.get(page)!) {
          if (update.indexOf(other) !== -1 && update.indexOf(other) < i) {
            const j = update.indexOf(other);
            // console.log(
            //   `updating [${update}] because ${page} must be before ${order.get(
            //     page,
            //   )!} (${other})`,
            // );
            const k = update.splice(j, 1)[0];
            update = [
              ...update.slice(0, i),
              k,
              ...update.slice(i),
            ];
            // console.log(`[${update}]`);
            i -= 1; // important!
            continue outer;
          }
        }
      }
      i += 1;
    }
    return update[Math.floor(update.length / 2)];
  }).reduce((a, b) => a + b, 0).print();
}

if (import.meta) {
  const input = Deno.readTextFileSync("input/day5.txt");
  const testInput = Deno.readTextFileSync("input/day5test.txt");
  part1(testInput);
  part1(input);
  part2(testInput);
  part2(input);
}
