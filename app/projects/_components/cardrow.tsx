import { neon } from '@neondatabase/serverless';
import Link from 'next/link';
import Card from './card';
import { status } from '../_lib/enums';

async function getRow(status:status) {
  const sql = neon(process.env.DATABASE_URL as string);
  const response = sql`SELECT * FROM projects WHERE status = ${status};`;
  return response;
}

interface Props {
  status: status;
}

export default async function CardRow({status}:Props) {
  return (
    <div className="flex flex-row gap-2">
        {
          (await getRow(status)).map(project =>
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="transition hover:ring-2" title={project.title} about={project.about} tags={project.tags} />
            </Link>
          )
        }
    </div>
  )
}