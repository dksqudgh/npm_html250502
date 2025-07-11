const vertical = document.querySelector('.vertical')
const horizontal = document.querySelector('.horizontal')
const target = document.querySelector('.target')
const tag = document.querySelector('.tag')

document.addEventListener('mousemove', event =>{
  console.log('마우스 움직인다.');
  const x = event.clientX
  const y = event.clientY
  console.log(`${x} ${y}`);
  vertical.style.left = `${x}px`
  horizontal.style.top = `${y}px`
  target.style.left = `${x}px`
  target.style.top = `${y}px`

  tag.style.left = `${x}px`
  tag.style.top = `${y}px`

  tag.innerHTML = `(${x}px,${y}px)`
})