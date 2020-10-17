export const format = value => {
  if (!value) {
    return ''
  }

  const digits = Array.from((+value).toString())
  const view = []

  for (let i = 1; digits.length; i++) {
    view.unshift(i % 4 ? digits.pop() : ' ')
  }

  return view.join('')
}
