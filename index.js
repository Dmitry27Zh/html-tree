setTimeout(() => prg.classList.add('active'), 3000)


window.addEventListener('load', () => {
  Array.from(anim.children).forEach((el) => {
    el.style = 'visibility: visible; transform: translate(0, 0)'
  })
})
