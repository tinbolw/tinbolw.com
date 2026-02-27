import Link from 'next/link';
import Card from './card';
import { status } from '../_lib/enums';
import { getRow } from '../_lib/neon';

interface Props {
  status: status;
}

export default async function CardRow({status}:Props) {
  return (
    <div className="flex flex-row gap-2 overflow-auto items-center p-1">
        {
          (await getRow(status)).map(project =>
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="transition hover:ring-2" title={project.title} about={project.about} tags={project.tags} />
            </Link>
          )
        }
        <Link href={`/projects/${status.toLowerCase()}`}>
          <div className="transition hover:ring-2 flex flex-row bg-zinc-900 p-3 rounded-lg">
            More
          </div>
        </Link>
    </div>
  )
}
