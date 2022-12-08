import { useBoundStore } from '@src/zustand'
import React from 'react'
import Chart from 'react-apexcharts'
import shallow from 'zustand/shallow'
import { Card } from '@components/common/Card'
import { latestOrders, topCustomers } from '@utils/table'
import { StatusCard } from '@components/elements/status-card/StatusCard'
import { statusCards } from '@src/models/data'

const series: ApexAxisChartSeries = [
  {
    name: 'Online Customers',
    data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
  },
  {
    name: 'Store Customers',
    data: [40, 30, 70, 80, 40, 16, 40, 20, 51],
  },
]

const options: ApexCharts.ApexOptions = {
  colors: ['#6ab04c', '#2980b9'],
  chart: {
    background: 'transparent',
    redrawOnParentResize: true,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
  legend: {
    position: 'top',
  },
  grid: {
    show: false,
  },
}

export const Dashboard = () => {
  const { mode } = useBoundStore((state) => ({ mode: state.mode }), shallow)

  return (
    <>
      <h2 className="page-header">Dashboard</h2>
      <div className="grid grid-cols-2 gap-x-6">
        <div className="grid grid-cols-2 gap-4">
          {statusCards.map(({ icon, count, title }, index) => (
            <div className="col-6" key={index}>
              <StatusCard icon={icon} count={count} title={title} />
            </div>
          ))}
        </div>
        <div className="card full-height">
          <Chart
            options={
              mode === 'theme-mode-dark'
                ? {
                    ...options,
                    theme: { mode: 'dark' },
                  }
                : {
                    ...options,
                    theme: { mode: 'light' },
                  }
            }
            series={series}
            type="line"
            height="100%"
          />
        </div>
      </div>
      <div className="grid grid-flow-col gap-x-6">
        <div className="col-span-4">
          <Card headerTitle="top customers" limit={10} tableData={topCustomers} />
        </div>
        <div className="col-span-8">
          <Card headerTitle="last orders" limit={10} tableData={latestOrders} />
        </div>
      </div>
    </>
  )
}
