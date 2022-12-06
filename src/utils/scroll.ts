import { RefObject } from 'react'

// button scroll to top of document
export const scrollToTopDocument = (buttonRef: RefObject<HTMLElement>) => {
  window.document.addEventListener('scroll', function () {
    if (buttonRef.current) {
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2) {
        buttonRef.current.classList.add('show')
      } else {
        buttonRef.current.classList.remove('show')
      }
    }
  })
}
