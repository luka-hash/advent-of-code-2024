String.prototype.fields = function (): string[] {
  return this.split(" ").filter((s) => s != "");
};

String.prototype.toInt = function (): number {
  return parseInt(this.valueOf());
};

String.prototype.lines = function (): string[] {
  return this.trim().split("\n").map((s) => s.trim());
};

Number.prototype.print = function (): void {
  console.log(this);
};

Number.prototype.debug = function (): Number {
  console.log(this);
  return this;
};

export const print = console.log;
