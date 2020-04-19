function isHaiku(text) {
  const rows = text.trim().toLowerCase().replace(/[^a-z\s]/g, '').split('\n')
  if (rows.length !== 3) return false

  const haiku = [5, 7, 5]
  const rowCounts = rows.map(row => row.trim().split(' ').reduce((count, word) => {
    let vowels = word.split(/[^aeiouy]+/).filter(v => v).length
    return count + vowels - (/[^aeiouy]e$/.test(word) && vowels > 1)
  }, 0))
  return rowCounts.every((n, i) => haiku[i] === n)
}

module.exports = isHaiku;
