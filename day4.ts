import "./utils.ts";

function part1(input: string) {
  const grid = input.lines().map((line) => line.toLowerCase());
  let christmases = 0;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] == "x") {
        if (j + 3 < grid[i].length && grid[i].slice(j, j + 4) == "xmas") {
          christmases += 1;
        }
        if (j - 3 > -1 && grid[i].slice(j - 3, j + 1) == "samx") {
          christmases += 1;
        }
        if (
          i + 3 < grid.length && grid[i + 1][j] == "m" &&
          grid[i + 2][j] == "a" && grid[i + 3][j] == "s"
        ) christmases += 1;
        if (
          i - 3 > -1 && grid[i - 1][j] == "m" && grid[i - 2][j] == "a" &&
          grid[i - 3][j] == "s"
        ) christmases += 1;
        if (
          i - 3 > -1 && j - 3 > -1 && grid[i - 1][j - 1] == "m" &&
          grid[i - 2][j - 2] == "a" && grid[i - 3][j - 3] == "s"
        ) christmases += 1;
        if (
          i - 3 > -1 && j + 3 < grid[i].length && grid[i - 1][j + 1] == "m" &&
          grid[i - 2][j + 2] == "a" && grid[i - 3][j + 3] == "s"
        ) christmases += 1;
        if (
          i + 3 < grid.length && j - 3 > -1 && grid[i + 1][j - 1] == "m" &&
          grid[i + 2][j - 2] == "a" && grid[i + 3][j - 3] == "s"
        ) christmases += 1;
        if (
          i + 3 < grid.length && j + 3 < grid[i].length &&
          grid[i + 1][j + 1] == "m" &&
          grid[i + 2][j + 2] == "a" && grid[i + 3][j + 3] == "s"
        ) christmases += 1;
      }
    }
  }
  console.log(christmases);
}

function part2(input: string) {
  const grid = input.lines().map((line) => line.toLowerCase());
  let christmases = 0;
  for (let i = 1; i < grid.length - 1; i += 1) {
    for (let j = 1; j < grid[i].length - 1; j += 1) {
      // I should probably leave a picture with my drawings of this... Since I chose this path, I couldn't allow myself anymore off-by-one errors...
      if (grid[i][j] == "a") {
        if (
          (grid[i - 1][j - 1] == "m" && grid[i - 1][j + 1] == "s" &&
            grid[i + 1][j - 1] == "m" && grid[i + 1][j + 1] == "s") ||
          (grid[i - 1][j - 1] == "m" && grid[i - 1][j + 1] == "m" &&
            grid[i + 1][j - 1] == "s" && grid[i + 1][j + 1] == "s") ||
          (grid[i - 1][j - 1] == "s" && grid[i - 1][j + 1] == "m" &&
            grid[i + 1][j - 1] == "s" && grid[i + 1][j + 1] == "m") ||
          (grid[i - 1][j - 1] == "s" && grid[i - 1][j + 1] == "s" &&
            grid[i + 1][j - 1] == "m" && grid[i + 1][j + 1] == "m")
        ) {
          christmases += 1;
        }
      }
    }
  }
  console.log(christmases);
}

if (import.meta) {
  const input = Deno.readTextFileSync("input/day4.txt");
  const testInput = Deno.readTextFileSync("input/day4test.txt");
  part1(testInput);
  part1(input);
  part2(testInput);
  part2(input);
}
