import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import shallow from 'zustand/shallow'
import { Sidebar } from '@components/elements/sidebar/Sidebar'
import { TopNav } from '@components/elements/topnav/TopNav'
import { useBoundStore } from '@src/zustand'
import { scrollToTopDocument } from '@utils/scroll'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { mode, color, shiftLeft, setMode, setColor } = useBoundStore(
    (state) => ({
      mode: state.mode,
      color: state.color,
      shiftLeft: state.shiftLeft,
      setMode: state.setMode,
      setColor: state.setColor,
    }),
    shallow,
  )
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false)
  const upButtonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollToTopDocument(upButtonRef)

    const theme = localStorage.getItem('themeMode')
    const color = localStorage.getItem('colorMode')

    setMode(theme ?? '')
    setColor(color ?? '')
  }, [])

  const handleGoToTop = () => {
    // Scroll to top logic
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const onChangeSidebarPosition = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  return (
    <div className={`layout text-txt-color ${mode} ${color}`}>
      <Sidebar isSidebarVisible={isSidebarVisible} />
      <div
        className={`pl-sidebar-width bg-second-bg min-h-screen transition-[padding-left] duration-300 ease ${
          shiftLeft ? 'pl-sidebar-width-1024' : ''
        } max-xs:pl-[0px]`}
      >
        <div className="flex justify-end p-[12px]">
          <img
            src="/assets/images/menu.svg"
            alt="Menu"
            className="w-[32px] h-[32px] max-xs:inline xs:hidden"
            onClick={onChangeSidebarPosition}
          />
        </div>
        <TopNav />
        <div className="layout__content-main p-[30px]">
          {children}
          <div
            ref={upButtonRef}
            className="layout__content-up w-9 h-9 p-[30px] bg-[#884ffb]
          shadow-box-shadow rounded-[50%] flex justify-center items-center
          fixed right-[50px] bottom-50px] z-100 cursor-pointer
          opacity-0 translate-y-[100px] transition-all duration-300 ease"
            onClick={handleGoToTop}
          >
            <i className="bx bxs-chevron-up text-[1.5rem] text-txt-white" />
          </div>
          <div className="layout__content-footer p-5 text-center text-[1.25rem]">
            Let&apos;s go bro.. Fight for the future
          </div>
        </div>
      </div>
    </div>
  )
}
