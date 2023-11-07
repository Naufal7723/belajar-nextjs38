import Link from "next/link"
const Navbar =() => {
    return(
        <nav className="Navbar">
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/contact">contact</Link>
            </li>
            <li>
            <Link href="/profile">profile</Link>
            </li>
        </ul>
        </nav>
    );
}

export default Navbar;