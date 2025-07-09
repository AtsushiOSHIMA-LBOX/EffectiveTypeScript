function range(start: number, limit: number) {
  const result = [];
  if (start === limit) {
    return result;
  }
  for (let i = start; i < limit; i++) {
    result.push(i);
  }
  return result;
}

let v = null;