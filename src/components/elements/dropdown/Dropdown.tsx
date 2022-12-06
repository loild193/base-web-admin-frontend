import React, { useEffect, useRef } from 'react'
import { clickOutsideRef } from '@utils/dropdown'

export interface Props {
  icon?: string
  badge?: any
  customToggle?: any
  contentData: any[]
  renderItems: (item: any) => JSX.Element
  renderFooter?: () => JSX.Element
}

export const Dropdown: React.FC<Props> = ({ icon, badge, customToggle, contentData, renderItems, renderFooter }) => {
  const dropdownButtonRef = useRef(null)
  const dropdownContentRef = useRef(null)

  useEffect(() => {
    clickOutsideRef(dropdownContentRef, dropdownButtonRef)
  }, [])

  return (
    <div className="relative z-[99]">
      <button ref={dropdownButtonRef} className="relative border-0 outline-none bg-transparent">
        {icon && <i className={icon} />}
        {badge && (
          <span
            className="flex justify-center items-center
          absolute -top-3 right-[-10px] h-[30px] w-[30px] rounded-[50%]
          bg-main-color color-txt-white text-[0.8rem]"
          >
            {badge}
          </span>
        )}
        {customToggle && customToggle()}
      </button>
      <div
        ref={dropdownContentRef}
        className="absolute top-[calc(100%+5px)] right-0 w-max max-w-[400px] rounded-border-radius
        bg-main-bg shadow-box-shadow overflow-hidden
        origin-top-right scale-0 transition-transform duration-200 ease-linear"
      >
        {contentData && renderItems && contentData.map((item) => renderItems(item))}
        {renderFooter && <div className="p-5 text-center">{renderFooter()}</div>}
      </div>
    </div>
  )
}
