import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import shallow from 'zustand/shallow'
import { SidebarItem } from '../../common/SidebarItem'
import sidebarItems from 'public/assets/JsonData/sidebar_routes.json'
import { useBoundStore } from '@src/zustand'

export const Sidebar = () => {
  const router = useRouter()
  const pathname = router.pathname
  const { shiftLeft, setShiftLeft } = useBoundStore(
    (state) => ({
      shiftLeft: state.shiftLeft,
      setShiftLeft: state.setShiftLeft,
    }),
    shallow,
  )
  const activeItem = sidebarItems.findIndex((item) => item.route === pathname)
  const setShift = () => setShiftLeft(!shiftLeft)

  let sidebarClassName =
    'w-sidebar-width h-screen fixed left-0 top-0 bg-main-bg shadow-box-shadow transition-[width] duration-300 ease'
  if (shiftLeft) {
    sidebarClassName = `${sidebarClassName} w-sidebar-width-1024`
  }
  return (
    <div className={sidebarClassName}>
      <div className="h-[150px] flex justify-center items-center">
        <img
          src="/assets/images/my-logo.png"
          alt="company logo"
          className={shiftLeft ? 'max-w-[80%] h-[30px]' : 'max-w-full h-[45px] transition-all duration-[400] ease'}
        />
      </div>
      <div
        className="mx-5 my-[5px] px-[25px] py-[10px] flex items-center
      font-semibold cursor-pointer transition-colors duration-200 ease
      hover:rounded-border-radius hover:bg-gradient-to-tr
      hover:from-main-color hover:to-second-color hover:text-txt-white"
        onClick={setShift}
      >
        {!shiftLeft ? (
          <>
            <i className={`bx bx-chevrons-left ${shiftLeft ? '' : 'mr-[10px] text-[1.5rem]'}`} />
            <span className="capitalize">Shift</span>
          </>
        ) : (
          <i className="bx bx-chevrons-right" />
        )}
      </div>
      {sidebarItems.map(({ route, icon, display_name }, index) => (
        <Link href={route} key={index}>
          <SidebarItem icon={icon} title={display_name} active={index === activeItem} shiftedLeft={shiftLeft} />
        </Link>
      ))}
    </div>
  )
}
