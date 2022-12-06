interface Props {
  displayName: string
  image: string
}

export const User = ({ displayName, image }: Props) => (
  <div className="flex items-center">
    <div className="w-10 h-10 rounded-[50%] mr-[10px] overflow-hidden">
      <img src={image} alt="user avatar" className="w-full" />
    </div>
    <div className="text-[1rem] font-semibold">{displayName}</div>
  </div>
)
