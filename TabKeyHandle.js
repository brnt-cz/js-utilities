export default class TabKeyHandle {
  constructor(selector) {
    this.element = document.querySelector(selector) || document.body
  }

  init() {
    const focusableWrapper = this.element.querySelectorAll('.focusable-wrapper')

    focusableWrapper.forEach((item) => {
      item.addEventListener('keydown', (event) => {
        const focusableChildren = item.querySelectorAll('.first-focusable, .last-focusable')
        const srcElementClass = event.srcElement.classList

        if (event.keyCode === 9) {
          if (event.shiftKey && srcElementClass.contains('first-focusable')) {
            focusableChildren.item(focusableChildren.length - 1).focus()
            event.preventDefault()

            return
          }
          if (!event.shiftKey && srcElementClass.contains('last-focusable')) {
            focusableChildren.item(0).focus()
            event.preventDefault()
          }
        }
      })
    })
  }
}
