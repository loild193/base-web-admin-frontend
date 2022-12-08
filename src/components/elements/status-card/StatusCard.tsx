import React from 'react'

interface Props {
  icon: string
  count: string
  title: string
}

export const StatusCard: React.FC<Props> = ({ icon, count, title }) => {
  return (
    <div
      className="status-card p-[30px] mb-[30px] relative rounded-border-radius
    flex items-center bg-main-bg shadow-box-shadow
    overflow-hidden z-1 cursor-pointer transition-colors duration-[400ms] ease
    hover:text-txt-color"
    >
      <div className="w-[30%] h-full flex items-center justify-center text-[3rem] z-1 max-1440:text-icon-fontsize-1024">
        <img src={icon} alt="Icon" className="w-[32px]" />
      </div>
      <div className="grow text-center capitalize z-1">
        <h4 className="mb-[10px] text-[2.5rem] max-1440:text-icon-fontsize-1024">{count}</h4>
        <span>{title}</span>
      </div>
    </div>
  )
}
