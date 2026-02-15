import { neon } from '@neondatabase/serverless';
import Tag from '../_components/tag';
import MainBox from './_components/mainbox';

export const dynamic = 'force-dynamic';

async function getProject(id: number) {
    const sql = neon(process.env.DATABASE_URL as string);
    const response = sql`SELECT * FROM projects WHERE id = ${id}`;
    return response;
}

// possible to make it refetch if website visited from anywhere but an internal link?
export default async function Home({ params }: { params: Promise<{ id: string }> }) {
    return (
        <Page id={Number((await params).id)} />
    )
}

async function Page({ id }: { id: number }) {
    if (isNaN(id)) {
        return (
            <MainBox>
                Invalid project ID.
            </MainBox>
        )
    } else {
        const projects = await getProject(id);
        if (projects[0] === undefined) {
            return (
                <MainBox>
                    Not Found.
                </MainBox>
            )
        } else {
            const project = projects[0];
            const parsedTags = project.tags?.substring(1, project.tags?.length - 1).split(",");
            return (
                <MainBox>
                    <h1 className="text-3xl">{project.title}</h1>
                    <div className="text-xl">
                        {project.about}
                    </div>
                    <div className="flex flex-row gap-1">
                        <Tag text={project.status}></Tag>
                        <div className="flex flex-row gap-1">
                            {
                                parsedTags?.map((tag: string) =>
                                    <Tag key={tag} text={tag}></Tag>
                                )
                            }
                        </div>
                    </div>
                    <div className="bg-zinc-700 p-2 rounded-lg flex-grow">
                        {project.description}
                    </div>
                </MainBox>
            )
        }
    }
}