import React, { useState } from 'react'
import { TableBody } from '@components/common/TableBody'
import { TableHead } from '@components/common/TableHead'

interface Props {
  headData: string[]
  bodyData: any[]
  limit: number
}

export const Table: React.FC<Props> = ({ headData, bodyData, limit }) => {
  const initShowData = limit ? bodyData.slice(0, limit) : bodyData
  const [showData, setShowData] = useState(initShowData)
  const [currentPage, setCurrentPage] = useState(1)

  let pages = 1
  const range = []

  if (limit !== null) {
    const page = Math.floor(bodyData.length / limit)
    pages = bodyData.length % limit === 0 ? page : page + 1
    for (let i = 0; i < pages; ++i) {
      range.push(i)
    }
  }

  const selectOnPage = (page: number) => {
    const start = limit * page
    const end = start + limit

    setShowData(bodyData.slice(start, end))
    setCurrentPage(page + 1)
  }

  return (
    <>
      <div className="overflow-y-hidden">
        <table className="w-full min-w-[400px] border-spacing-0">
          {headData && (
            <thead className="bg-second-bg">
              <tr className="text-left cursor-pointer">
                {headData.map((item, index) => (
                  <TableHead key={index} item={item} />
                ))}
              </tr>
            </thead>
          )}
          {bodyData && (
            <tbody>
              {showData.map((item, index) => (
                <TableBody key={index} item={item} />
              ))}
            </tbody>
          )}
        </table>
      </div>
      {pages > 1 && (
        <div className="mt-5 w-full flex items-center justify-end gap-x-[10px]">
          {range.map((item, index) => (
            <div
              className={`w-[36px] h-[36px] rounded-[50%] flex items-center justify-center cursor-pointer
              hover:bg-second-color hover:text-txt-white ${
                currentPage === item + 1 && 'bg-main-color text-txt-white font-semibold'
              }`}
              key={index}
              onClick={() => selectOnPage(item)}
            >
              {item + 1}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
