import { Table } from '@components/elements/table/Table'
import Link from 'next/link'
import React from 'react'

export interface Props {
  headerTitle: string
  tableData: {
    head: string[]
    body: any[]
  }
  limit: number
}

export const Card: React.FC<Props> = ({ headerTitle, tableData, limit }) => {
  return (
    <div className="card">
      <div className="card__header">
        <h3>{headerTitle}</h3>
      </div>
      <div className="card__body">
        <Table limit={limit} headData={tableData.head} bodyData={tableData.body} />
      </div>
      <div className="card__footer">
        <Link href="/">View all</Link>
      </div>
    </div>
  )
}
