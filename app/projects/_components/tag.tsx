interface Props {
  text: string;
}

export default function Tag({ text }:Props) {
  return (
    <div className={`flex p-1 bg-zinc-700 rounded-lg`}>
      <div className="text-xs">{text}</div>
    </div>
  )
}