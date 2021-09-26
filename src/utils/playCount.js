export const dealWithPlayCount = (count) => {
  if (typeof count !== 'number') count = Number(count)
  if (count < 10000) {
    return count
  } else {
    return parseInt(count / 10000) + '万'
  }
}