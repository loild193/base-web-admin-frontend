import { Badge } from '@components/elements/badge/Badge'
import { TYPE } from '@src/models/badge'
import { orderStatus } from '@utils/table'

type Item = { [key: string]: string }
interface Props {
  item: Item
}

export const TableBody = ({ item }: Props) => (
  <tr className="hover:bg-main-color hover:text-txt-white cursor-pointer">
    {Object.keys(item).map((key, index) =>
      key === 'status' ? (
        <td key={index} className="capitalize px-[10px] py-[15px]">
          <Badge type={orderStatus[item[key]] as TYPE} content={item[key]} />
        </td>
      ) : (
        <td key={index} className="capitalize px-[10px] py-[15px]">
          {item[key]}
        </td>
      ),
    )}
  </tr>
)
