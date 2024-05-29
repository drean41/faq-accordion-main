const btns = document.getElementsByClassName('btn')

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', (btn) => {
    btn.target.classList.toggle('minus-icon')
    const faqItem = btn.target.parentNode.parentNode
    const pAnswer = faqItem.getElementsByClassName('p-answer')[0]
    pAnswer.classList.toggle('hidden')
  })
}