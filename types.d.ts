declare global {
  interface String {
    fields(): string[];
    toInt(): number;
    lines(): string[];
  }
}

export {};
