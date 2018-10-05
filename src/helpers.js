export function arrToMap(arr) {
  return arr.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {})
}

export function mapToArray(obj) {
  return Object.keys(obj).map(id => obj[id])
}