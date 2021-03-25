export const SumTotal = (value, key) => {
  return value.reduce((a, b) => a + (b[key] || 0), 0)
}
