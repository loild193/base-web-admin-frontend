import Link from 'next/link'

interface Props {
  icon: string
  content: string
}

export const DropdownItem = ({ icon, content }: Props) => (
  <Link href="/">
    <div className="p-[20px] flex items-center hover:bg-second-bg">
      <img src={icon} alt="Icon" className="mr-[20px] w-[20px]" />
      <span className="text-[0.75rem]">{content}</span>
    </div>
  </Link>
)
