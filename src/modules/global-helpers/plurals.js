/**
 * @returns {Function} формирования слова от количества
 *
 * @param {string} word неизменная часть слова
 * @param {string} e1 первое окончание (1 планет'А')
 * @param {string} e2 второе окончание (2/3/4 планет'Ы')
 * @param {string} e3 третье окончание (0/5/6/7/8/9 планет'')
 */
export const createPluralMaker = (word, e1, e2, e3) => n => {
  const rem100 = n % 100
  const rem10 = (rem100 > 4 && rem100 < 21) ? 5 : n % 10

  switch (rem10) {
    case 1:
      return word + e1
    case 2:
    case 3:
    case 4:
      return word + e2
    default:
      return word + e3
  }
}
