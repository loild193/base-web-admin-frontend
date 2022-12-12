import React from 'react'
import { DropdownItem } from '@components/common/DropdownItem'
import { Footer } from '@components/common/Footer'
import { User } from '@components/common/User'
import { ThemeMenu } from '../theme-menu/ThemeMenu'
import { Dropdown } from '../dropdown/Dropdown'
import { notifications, subMenu } from '@src/models/data'

const currentUser = {
  displayName: 'Uchiha Obito',
  image: '/assets/images/avatar.jpeg',
}

const renderFooter = () => <Footer />

export const TopNav = () => {
  return (
    <div
      className="topnav p-[30px] h-topnav-height flex items-center justify-between
    max-md:flex-col max-md:!h-[100%] max-md:gap-y-6 max-xs:pt-[10px]"
    >
      <div
        className="topnav__search h-[50px] relative flex items-center rounded-border-radius
      bg-main-bg shadow-box-shadow overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search here..."
          className="w-full h-full pl-[20px] pr-[60px] py-[10px] rounded-border-radius
          text-[1rem] bg-main-bg text-txt-color"
        />
        <img src="/assets/images/search.svg" alt="Search" className="absolute right-[20px] w-[20px]" />
      </div>
      <div className="topnav__right flex items-center gap-x-[30px]">
        <Dropdown
          customToggle={() => <User displayName={currentUser.displayName} image={currentUser.image} />}
          contentData={subMenu}
          renderItems={(item) => <DropdownItem key={item.id} icon={item.icon} content={item.content} />}
        />
        <Dropdown
          icon="/assets/images/bell.svg"
          badge="19"
          contentData={notifications}
          renderItems={(item) => <DropdownItem key={item.id} icon={item.icon} content={item.content} />}
          renderFooter={renderFooter}
        />
        <ThemeMenu />
      </div>
    </div>
  )
}
