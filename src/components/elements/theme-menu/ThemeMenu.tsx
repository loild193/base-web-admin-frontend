import React, { useEffect, useRef, useState } from 'react'
import shallow from 'zustand/shallow'
import { useBoundStore } from '@src/zustand'
import { COLOR_SETTINGS, MODE_SETTINGS, ThemeSetting } from '@src/models/theme'
import { clickOutsideRef } from '@utils/dropdown'

const setActiveMenu = (ref: React.RefObject<HTMLDivElement>) => ref.current?.classList?.add('active')
const removeActiveMenu = (ref: React.RefObject<HTMLDivElement>) => ref.current?.classList?.remove('active')

export const ThemeMenu = () => {
  const { setMode, setColor } = useBoundStore(
    (state) => ({
      mode: state.mode,
      color: state.color,
      setMode: state.setMode,
      setColor: state.setColor,
    }),
    shallow,
  )
  const [currentMode, setCurrentMode] = useState('light')
  const [currentColor, setCurrentColor] = useState('blue')
  const menuRef = useRef<HTMLDivElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    clickOutsideRef(menuRef, menuToggleRef)
  }, [])

  useEffect(() => {
    const theme = localStorage.getItem('themeMode')
    const color = localStorage.getItem('colorMode')

    const themeClass = MODE_SETTINGS.find((setting) => setting.class === theme)
    const colorClass = COLOR_SETTINGS.find((setting) => setting.class === color)

    typeof themeClass !== 'undefined' && setCurrentMode(themeClass.id)
    typeof colorClass !== 'undefined' && setCurrentMode(colorClass.id)
  }, [])

  const setNewMode = (mode: ThemeSetting) => {
    setCurrentMode(mode.id)
    localStorage.setItem('themeMode', mode.class)
    setMode(mode.class)
  }
  const setNewColor = (color: ThemeSetting) => {
    setCurrentColor(color.id)
    localStorage.setItem('colorMode', color.class)
    setColor(color.class)
  }

  return (
    <>
      <button ref={menuToggleRef} className="dropdown__toggle" onClick={() => setActiveMenu(menuRef)}>
        <i className="bx bx-palette" />
      </button>
      <div
        ref={menuRef}
        className="theme-menu w-[300px] h-screen p-5
      fixed top-0 right-[-300px] z-[99] bg-main-bg shadow-box-shadow
      transition-[right] duration-[400] ease-transition-cubic"
      >
        <h4>Theme settings</h4>
        <div
          className="theme-menu__close absolute top-[17px] right-[20px] bg-transparent
          text-[1.25rem] cursor-pointer"
          onClick={() => removeActiveMenu(menuRef)}
        >
          <i className="bx bx-x" />
        </div>
        <div className="mt-10">
          <span>Choose mode</span>
          <ul className="mt-5">
            {MODE_SETTINGS.map((mode, index) => (
              <li
                key={index}
                className="flex items-center cursor-pointer gap-y-[10px]"
                onClick={() => setNewMode(mode)}
              >
                <div
                  className={`mode-list__color w-9 h-9 rounded-[50%] mr-[10px]
                  flex items-center justify-center text-[1.25rem] ${mode.background} ${
                    mode.id === currentMode && 'active'
                  }`}
                >
                  <i className="bx bx-check scale-0 transition-transform duration-300 ease-transition-cubic" />
                </div>
                <span>{mode.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <span>Choose color</span>
          <ul className="mt-5">
            {COLOR_SETTINGS.map((color, index) => (
              <li key={index} onClick={() => setNewColor(color)}>
                <div
                  className={`mode-list__color w-9 h-9 rounded-[50%] mr-[10px]
                  flex items-center justify-center text-[1.25rem]  ${color.background} ${
                    color.id === currentColor && 'active'
                  }`}
                >
                  <i className="bx bx-check scale-0 transition-transform duration-300 ease-transition-cubic" />
                </div>
                <span>{color.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
