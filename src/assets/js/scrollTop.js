export default function (position, speed = 1) {
  let timer = null
  const time = 10
  timer = setInterval(() => {
    position -= speed * time
    if (position > 0) {
      window.scrollTo(0, position)
    } else {
      window.scrollTo(0, 0)
      clearInterval(timer)
    }
  }, time)
}
