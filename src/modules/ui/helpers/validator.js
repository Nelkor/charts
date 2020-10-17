export const isCorrectItems = arr => Array.isArray(arr)
  && arr.every(item => item.name && Number.isFinite(item.value))
