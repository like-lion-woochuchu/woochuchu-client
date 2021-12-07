const dateParse = (dateInfo) => {
  let hour
  let noon
  const date =
    dateInfo.slice(0, 4) +
    '년 ' +
    dateInfo.slice(5, 7) +
    '월 ' +
    dateInfo.slice(8, 10) +
    '일'

  const tempTime = dateInfo.slice(11, 19)
  if (tempTime.slice(0, 2) >= 12 && tempTime.slice(0, 2) < 24) {
    noon = '오후 '
  } else {
    noon = '오전 '
  }

  if (tempTime.slice(0, 2) > 12 && tempTime.slice(0, 2) < 24) {
    hour = tempTime.slice(0, 2) - 12
  } else {
    hour = tempTime.slice(0, 2)
  }

  let minute = tempTime.slice(3, 5)

  return { date: date, time: noon + hour + '시 ' + minute + '분' }
}

export default dateParse
