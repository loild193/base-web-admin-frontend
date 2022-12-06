import { Badge } from '@components/elements/badge/Badge'
import { TYPE } from '@src/models/badge'
import { orderStatus } from '@utils/table'

type Item = { [key: string]: string }
interface Props {
  item: Item
}

export const TableBody = ({ item }: Props) => (
  <tr className="hover:bg-main-color text-txt-white">
    {Object.keys(item).map((key, index) =>
      key === 'status' ? (
        <td key={index}>
          <Badge type={orderStatus[item[key]] as TYPE} content={item[key]} />
        </td>
      ) : (
        <td key={index}>{item[key]}</td>
      ),
    )}
  </tr>
)
