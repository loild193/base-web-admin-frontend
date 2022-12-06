interface Props {
  item: string
}

export const TableHead = ({ item }: Props) => {
  return <th className="capitalize px-[10px] py-[15px]">{item}</th>
}
