declare global {
  interface String {
    fields(): string[];
    toInt(): number;
    lines(): string[];
  }
  interface Number {
    print(): void;
    debug(): Number;
  }
}

export {};
