import { Card } from '@components/common/Card'
import customerList from 'public/assets/JsonData/customers-list.json'

const customerData = {
  head: ['', 'name', 'email', 'location', 'phone', 'total spend', 'total orders'],
  body: customerList,
}

export const Customers = () => {
  return (
    <div>
      <h2 className="page-header">customers</h2>
      <div className="row">
        <div className="col-12">
          <Card headerTitle="" tableData={customerData} limit={10} />
        </div>
      </div>
    </div>
  )
}
