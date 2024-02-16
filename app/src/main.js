const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');


const handleMouseMove = (e) => {
  const y = e.pageY - e.target.offsetTop
  const percent = y / e.target.offsetHeight
  const min = .25
  const max = 4
  const height = Math.round(percent * 100) + '%'
  const playbackRate = percent * (max - min) + min
  bar.style.height = height
  bar.textContent = playbackRate.toFixed(2) + 'x'
  video.playbackRate = playbackRate
}
speed.addEventListener('mousemove', handleMouseMove)