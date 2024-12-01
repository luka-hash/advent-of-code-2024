String.prototype.fields = function (): string[] {
  return this.split(" ").filter((s) => s != "");
};

String.prototype.toInt = function (): number {
  return parseInt(this.valueOf());
};

String.prototype.lines = function (): string[] {
  return this.trim().split("\n").map((s) => s.trim());
};
