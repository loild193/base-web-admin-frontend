import React, { useEffect, useRef, useState } from 'react'
import shallow from 'zustand/shallow'
import { useBoundStore } from '@src/zustand'
import { COLOR_SETTINGS, MODE_SETTINGS, ThemeSetting } from '@src/models/theme'

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
    const handler = (e: any) => {
      // user click toggle
      if (menuToggleRef.current && menuToggleRef.current.contains(e.target as Node | null)) {
        menuRef?.current?.classList.toggle('active')
      } else {
        // user click outside toggle and content
        if (menuRef.current && !menuRef.current.contains(e.target as Node | null)) {
          menuRef?.current?.classList.remove('active')
        }
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
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
        <img src="/assets/images/palette.svg" alt="Palette" className="w-[2rem]" />
      </button>
      <div
        ref={menuRef}
        className="theme-menu w-[300px] h-screen p-[20px]
      fixed top-0 right-[-300px] z-[99] bg-main-bg shadow-box-shadow
      transition-[right] duration-[400ms] ease-transition-cubic"
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
                  className={`mode-list__color w-[36px] h-[36px] rounded-[50%] mr-[10px]
                  flex items-center justify-center text-[1.25rem] ${mode.background} ${
                    mode.id === currentMode ? 'active' : ''
                  }`}
                >
                  <img
                    src="/assets/images/palette.svg"
                    alt="Palette"
                    className="w-[0.5rem] scale-0 hover:scale-1 transition-transform duration-300 ease-transition-cubic"
                  />
                </div>
                <span>{mode.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <span>Choose color</span>
          <ul className="mt-5 flex flex-col gap-y-2">
            {COLOR_SETTINGS.map((color, index) => (
              <li key={index} className="flex items-center gap-x-4" onClick={() => setNewColor(color)}>
                <div
                  className={`mode-list__color w-[36px] h-[36px] rounded-[50%] mr-[10px]
                  flex items-center justify-center text-[1.25rem]  ${color.background} ${
                    color.id === currentColor ? 'active' : ''
                  }`}
                >
                  <img
                    src="/assets/images/palette.svg"
                    alt="Palette"
                    className="w-[0.5rem] scale-0 hover:scale-1 transition-transform duration-300 ease-transition-cubic"
                  />
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
