const colors = [
  '#1BACF2',
  '#73DDFF',
  '#6EDED7',
  '#F8E296',
  '#F8BE96',
  '#F27E82',
  '#F0A2C8',
  '#C291EE',
  '#8599F4',
]

export const colorByIndex = index => colors[index % colors.length]
