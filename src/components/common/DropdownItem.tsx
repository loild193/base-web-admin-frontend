import Link from 'next/link'

interface Props {
  icon: string
  content: string
}

export const DropdownItem = ({ icon, content }: Props) => (
  <Link href="/">
    <div className="p-5 flex items-center hover:bg-second-bg">
      <i className={`${icon} mr-5 text-[1.25rem]`} />
      <span>{content}</span>
    </div>
  </Link>
)
