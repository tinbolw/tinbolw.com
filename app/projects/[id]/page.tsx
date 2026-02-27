import { neon } from '@neondatabase/serverless';
import Tag from '../_components/tag';
import StyledLink from '@/app/_components/styledlink';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

async function getProject(id: number) {
    const sql = neon(process.env.DATABASE_URL as string);
    const response = sql`SELECT * FROM projects WHERE id = ${id}`;
    return response;
}

export default async function Home({ params }: { params: Promise<{ id: string }> }) {
    // https://github.com/vercel/next.js/discussions/36723#discussioncomment-15640848
    const headersList = await headers();
    const referer = headersList.get("referer") || "";

    return (
        <Page id={Number((await params).id)} referer={referer} />
    )
}

async function Page({ id, referer }: { id: number, referer: string }) {
    if (isNaN(id)) {
        return (
            <div>
                Invalid project ID.
            </div>
        )
    } else {
        const projects = await getProject(id);
        if (projects[0] === undefined) {
            return (
                <div>
                    Not Found.
                </div>
            )
        } else {
            const project = projects[0];
            const parsedTags = project.tags?.substring(1, project.tags?.length - 1).split(",");
            return (
                <div className="flex flex-col items-center justify-center gap-1">
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
                    {
                        referer.includes("/projects") ? <StyledLink href={referer} label="Back" /> :
                            <StyledLink href="/projects" label="Back" />
                    }
                </div>
            )
        }
    }
}