import { status, rowConfig } from "../_lib/enums";
import { neon } from "@neondatabase/serverless";
import Card from "../_components/card";
import Link from "next/link";
import { ReactNode } from "react";

/**
 * Returns the number of projects with the given status.
 * @param status 
 * @returns 
 */
export async function getProjectCount(status:status) {
  const sql = neon(process.env.DATABASE_URL as string);
  const response = await sql`SELECT COUNT(*) FROM projects WHERE status = ${status};`;
  return parseInt(response[0].count);
}

/**
 * Returns a row of projects with a given status.
 * @param status The status of the projects
 * @returns ReactNode[]
 */
export async function getRow(status:status) {
  const sql = neon(process.env.DATABASE_URL as string);
  const response = sql`
    SELECT *
    FROM projects
    WHERE status = ${status}
    FETCH NEXT ${rowConfig.PROJECTSPERCOLUMN} ROWS ONLY;`;
  return response;
}

/**
 * Returns all rows of all projects with a given status.
 * @param status The status of the projects
 * @returns ReactNode[]
 */
export function getAllRows(status:status, projectCount:number) {
  const sql = neon(process.env.DATABASE_URL as string);

  let i = projectCount;
  let projects = [];
  while (i >= rowConfig.PROJECTSPERCOLUMN) {
    projects.push(
      new Promise<Awaited<ReactNode>>(async (resolve, reject) => {
        const response = await sql`
          SELECT title, about, description, tags, id
          FROM projects
          WHERE status = ${status}
          ORDER BY id
          OFFSET ${projectCount - i} ROWS
          FETCH NEXT ${rowConfig.PROJECTSPERCOLUMN} ROWS ONLY;`;
        resolve(
          response.map(project => {
            return <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="transition hover:ring-2" title={project.title} about={project.about} tags={project.tags} />
            </Link>
          })
        );
      })
    )
    i -= rowConfig.PROJECTSPERCOLUMN;
  }
  if (i > 0) {
    projects.push(
      new Promise<Awaited<ReactNode>>(async (resolve, reject) => {
        const response = await sql`
          SELECT title, about, description, tags, id
          FROM projects
          WHERE status = ${status}
          ORDER BY id
          OFFSET ${projectCount - i} ROWS
          FETCH NEXT ${i} ROWS ONLY;`;
        resolve(
          response.map(project => {
            return <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="transition hover:ring-2" title={project.title} about={project.about} tags={project.tags} />
            </Link>
          })
        );
      })
    )
  }
  return projects;
}
