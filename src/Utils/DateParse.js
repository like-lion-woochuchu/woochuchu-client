const dateParse = (dateInfo) => {
  const date = dateInfo.slice(0, 10)
  const time = dateInfo.slice(11, 19)
  return { date: date, time: time }
}

export default dateParse
