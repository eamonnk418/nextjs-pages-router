import Link from "next/link";

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/applications">Applications</Link></li>
            </ul>
        </nav>
    );
}