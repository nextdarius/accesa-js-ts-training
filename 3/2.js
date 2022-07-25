function verifyPassword(value, rules) {
  if (!value || typeof value !== 'string') {
    throw 'Value is invalid!';
  }

  for (let rule in rules) {
    switch (rule.type) {
      case 'Capital':
        // checkCapitalLetters();
        break;
      case 'Lower':
        // checkLowerLetters();
        break;
      case 'Symbols':
        // checkSymbols();
        break;
      default:
        break;
    }
  }
}
