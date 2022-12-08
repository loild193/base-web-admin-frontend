import React, { useEffect, useRef } from 'react'

export interface Props {
  icon?: string
  badge?: any
  customToggle?: any
  contentData: any[]
  renderItems: (item: any) => JSX.Element
  renderFooter?: () => JSX.Element
}

export const Dropdown: React.FC<Props> = ({ icon, badge, customToggle, contentData, renderItems, renderFooter }) => {
  const dropdownButtonRef = useRef<HTMLButtonElement>(null)
  const dropdownContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: any) => {
      // user click toggle
      if (dropdownButtonRef.current && dropdownButtonRef.current.contains(e.target as Node | null)) {
        dropdownContentRef?.current?.classList.toggle('active')
      } else {
        // user click outside toggle and content
        if (dropdownContentRef.current && !dropdownContentRef.current.contains(e.target as Node | null)) {
          dropdownContentRef?.current?.classList.remove('active')
        }
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])

  return (
    <div className="relative z-[99]">
      <button ref={dropdownButtonRef} className="relative border-0 outline-none bg-transparent">
        {icon && <img src={icon} alt="Icon" className={`w-[32px] text-txt-color`} />}
        {badge && (
          <span
            className="flex justify-center items-center
          absolute -top-[12px] right-[-10px] h-[30px] w-[30px] rounded-[50%]
          bg-main-color color-txt-white text-[0.8rem]"
          >
            {badge}
          </span>
        )}
        {customToggle && customToggle()}
      </button>
      <div
        ref={dropdownContentRef}
        className="dropdown__content absolute top-[calc(100%+5px)] right-0
        w-max-content max-w-[400px] rounded-border-radius
        bg-main-bg shadow-box-shadow overflow-hidden
        origin-top-right scale-0 transition-transform duration-200 ease-linear"
      >
        {contentData && renderItems && contentData.map((item) => renderItems(item))}
        {renderFooter && <div className="p-[20px] text-center">{renderFooter()}</div>}
      </div>
    </div>
  )
}
