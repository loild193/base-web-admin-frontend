import React from 'react'
import { TYPE } from '@src/models/badge'

export interface Props {
  type: TYPE
  content: string
}

export const Badge: React.FC<Props> = ({ type, content }) => {
  let bgClassName = 'px-[11px] py-[6px] rounded-border-radius'

  if (type === TYPE.DANGER) {
    bgClassName = `${bgClassName} bg-main-color-red`
  } else if (type === TYPE.SUCCESS) {
    bgClassName = `${bgClassName} bg-main-color-green`
  } else if (type === TYPE.PRIMARY) {
    bgClassName = `${bgClassName} bg-main-color-blue`
  } else {
    bgClassName = `${bgClassName} bg-main-color-orange`
  }

  return <span className={bgClassName}>{content}</span>
}
