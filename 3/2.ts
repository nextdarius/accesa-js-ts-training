enum RuleType {
  Capital,
  Lower,
  Symbol,
}

interface IRule {
  type: RuleType;
  value: number;
}

function verifyPassword(value: string, rules: IRule[]) {
  for (const rule of rules) {
    switch (rule.type) {
      case RuleType.Capital:
        // checkCapitalLetters();
        break;
      case RuleType.Lower:
        // checkLowerLetters();
        break;
      case RuleType.Symbol:
        // checkSymbols();
        break;
    }
  }
}

export {};
