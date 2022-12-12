import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import shallow from 'zustand/shallow'
import { SidebarItem } from '../../common/SidebarItem'
import sidebarItems from 'public/assets/JsonData/sidebar_routes.json'
import { useBoundStore } from '@src/zustand'

interface Props {
  isSidebarVisible: boolean
}

export const Sidebar: React.FC<Props> = ({ isSidebarVisible }) => {
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

  let sidebarClassName = `w-sidebar-width h-[100vh] fixed left-0 top-0 bg-main-bg shadow-box-shadow transition-[width] duration-300 ease
    max-xs:!w-[fit-content] max-xs:invisible ${
      isSidebarVisible
        ? 'max-xs:!visible max-xs:translate-x-0 max-xs:z-[100]'
        : 'max-xs:invisible max-xs:translate-x-[-200px]'
    } transition duration-300 ease-transition-cubic`
  if (shiftLeft) {
    sidebarClassName = `${sidebarClassName} !w-sidebar-width-1024`
  }
  return (
    <div className={sidebarClassName}>
      <div className="h-[150px] flex justify-center items-center">
        <img
          src="/assets/images/my-logo.png"
          alt="company logo"
          className={shiftLeft ? 'max-w-[80%] h-[30px]' : 'max-w-full h-[45px] transition-all duration-[400ms] ease'}
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
            <img src="/assets/images/right.svg" alt="Right" className="mr-[10px] w-[20px] rotate-180" />
            <span className="capitalize">Shift</span>
          </>
        ) : (
          <img src="/assets/images/right.svg" alt="Right" className="w-[20px]" />
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
