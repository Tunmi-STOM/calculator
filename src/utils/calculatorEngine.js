export function calculateExpression(tokens) {
  let stack = [];
  let current = "";

  for (let t of tokens) {
    if (!isNaN(t) || t === ".") {
      current += t;
    } else {
      stack.push(Number(current));
      stack.push(t);
      current = "";
    }
  }
  stack.push(Number(current));

  // Power
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === "^") {
      stack[i - 1] = stack[i - 1] ** stack[i + 1];
      stack.splice(i, 2);
      i--;
    }
  }

  // Multiply / Divide
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === "*" || stack[i] === "/") {
      stack[i - 1] =
        stack[i] === "*"
          ? stack[i - 1] * stack[i + 1]
          : stack[i - 1] / stack[i + 1];
      stack.splice(i, 2);
      i--;
    }
  }

  // Add / Subtract
  let result = stack[0];
  for (let i = 1; i < stack.length; i += 2) {
    result = stack[i] === "+" ? result + stack[i + 1] : result - stack[i + 1];
  }

  return result;
}

export function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) return NaN;
  return n <= 1 ? 1 : n * factorial(n - 1);
}
