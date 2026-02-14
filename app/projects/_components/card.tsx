import Tag from "./tag";

interface Props {
  title: string;
  about: string;
  tags?: string;
}

export default function Card({ title, about, tags }:Props) {
  const parsedTags = tags?.substring(1, tags?.length - 1).split(",");
  return (
    <div className="flex flex-col bg-zinc-900 p-3 rounded-lg">
      <h3 className="text-xl">{title}</h3>
      <a>{about}</a>
      <div className="flex flex-row gap-1">
        {
          parsedTags?.map(tag => 
            <Tag key={tag} text={tag}></Tag>
          )
        }
      </div>
    </div>
  )
}