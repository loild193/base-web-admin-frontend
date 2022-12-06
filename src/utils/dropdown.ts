import { RefObject } from 'react'

// click outside function to close dropdown
export const clickOutsideRef = (contentRef: RefObject<HTMLElement>, toggleRef: RefObject<HTMLElement>) => {
  document.addEventListener('mousedown', (e) => {
    // user click toggle
    if (toggleRef.current && toggleRef.current.contains(e.target as Node | null)) {
      contentRef?.current?.classList.toggle('active')
    } else {
      // user click outside toggle and content
      if (contentRef.current && !contentRef.current.contains(e.target as Node | null)) {
        contentRef?.current?.classList.remove('active')
      }
    }
  })
}
