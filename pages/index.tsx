import dynamic from 'next/dynamic'
import { Layout } from '@components/layout/Layout'

const Dashboard = dynamic(() => import('@components/screens/Dashboard').then((mod) => mod.Dashboard), { ssr: false })

const DashboardPage = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}

export default DashboardPage
