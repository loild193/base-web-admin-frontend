import React from 'react'

export interface Props {
  active: boolean
  icon: string
  title: string
  shiftedLeft: boolean
}

export const SidebarItem: React.FC<Props> = ({ active = false, icon = '', title = '', shiftedLeft = false }) => {
  const activeStatus = active
    ? 'rounded-border-radius bg-gradient-to-tr from-main-color to-second-color text-txt-white'
    : ''

  return (
    <div className="px-[20px] py-0">
      <div
        className={`${
          shiftedLeft
            ? 'w-sidebar-width-1024'
            : 'px-[25px] py-[15px] flex items-center font-semibold transition-colors duration-200 ease'
        } ${activeStatus} hover:text-main-color`}
      >
        <i className={`${icon} ${shiftedLeft ? 'text-icon-fontsize-1024' : 'mr-[10px] text-[1.5rem]'}`} />
        <span className={shiftedLeft ? 'hidden' : 'capitalize'}>{title}</span>
      </div>
    </div>
  )
}
