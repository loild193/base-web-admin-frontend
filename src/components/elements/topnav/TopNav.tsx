import React from 'react'
import { DropdownItem } from '@components/common/DropdownItem'
import { Footer } from '@components/common/Footer'
import { User } from '@components/common/User'
import { ThemeMenu } from '../theme-menu/ThemeMenu'
import { Dropdown } from '../dropdown/Dropdown'
import notifications from 'public/assets/JsonData/notification.json'
import userMenus from 'public/assets/JsonData/user_menus.json'

const currentUser = {
  displayName: 'Uchiha Obito',
  image: '/assets/images/avatar.jpeg',
}

const renderFooter = () => <Footer />

export const TopNav = () => {
  return (
    <div className="topnav p-[30px] h-topnav-height flex items-center justify-between">
      <div
        className="topnav__search h-[50px] relative flex items-center rounded-border-radius
      bg-main-bg shadow-box-shadow overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search here..."
          className="w-full h-full pl-5 pr-[60px] py-[10px] rounded-border-radius text-[1rem] bg-main-bg text-txt-color"
        />
        <i className="bx bx-search absolute right-5 text-[1.25rem]" />
      </div>
      <div className="topnav__right flex items-center gap-x-[30px]">
        <div>
          <Dropdown
            customToggle={() => <User displayName={currentUser.displayName} image={currentUser.image} />}
            contentData={userMenus}
            renderItems={(item) => <DropdownItem icon={item.icon} content={item.content} />}
          />
        </div>
        <div>
          <Dropdown
            icon="bx bx-bell"
            badge="19"
            contentData={notifications}
            renderItems={(item) => <DropdownItem icon={item.icon} content={item.content} />}
            renderFooter={renderFooter}
          />
        </div>
        <div>
          <ThemeMenu />
        </div>
      </div>
    </div>
  )
}
