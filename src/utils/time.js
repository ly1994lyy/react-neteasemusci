export const timeConversion = (time) => {
  time = new Date(Number(time))
  let min = addZero(time.getMinutes())
  let second = addZero(time.getSeconds())
  return `${min}:${second}`
}

//补零操作
function addZero (num) {
  if (parseInt(num) < 10) {
    num = '0' + num
  }
  return num
}