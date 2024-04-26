function calc(...args) {
  for (let i = 0; i < args.length; ++i) {
    if (typeof args[i] !== "number") {
      const op = args[i];
      if (typeof op !== "string") {
        throw new Error("Invalid input type");
      }
      if (op !== "*" && op !== "/") {
        continue;
      }
      if (i === 0 || i === args.length - 1) {
        throw new Error("Invalid input type");
      }
      const a = args[i - 1];
      const b = args[i + 1];
      if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Invalid input type");
      }
      if (op === "*") {
        args[i - 1] = a * b;
      }
      if (op === "/") {
        if (b === 0) {
          throw new Error("Division by zero");
        }
        args[i - 1] = a / b;
      }
      args.splice(i, 2);
      --i;
    }
  }
  for (let i = 0; i < args.length; ++i) {
    if (typeof args[i] !== "number") {
      const op = args[i];
      if (op !== "+" && op !== "-") {
        if (isNaN(parseInt(op))) {
          throw new Error("Invalid operator");
        } else {
          throw new Error("Invalid input type");
        }
      }
      if (i === 0 || i === args.length - 1) {
        throw new Error("Invalid input type");
      }
      const a = args[i - 1];
      const b = args[i + 1];
      if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Invalid input type");
      }
      if (op === "+") {
        args[i - 1] = a + b;
      }
      if (op === "-") {
        args[i - 1] = a - b;
      }
      args.splice(i, 2);
      --i;
    }
  }
  if (args.length !== 1) {
    throw new Error("Invalid input type");
  }
  return args[0];
}

module.exports = { calc };
