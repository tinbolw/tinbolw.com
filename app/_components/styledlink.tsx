import Link from "next/link"

export default function StyledLink({ href, label }: { href: string, label: string }) {
    return (
        <Link href={href}>
            <div className="transition hover:text-gray-400">{label}</div>
        </Link>
    )
}