import Link from "next/link";

export default function Page() {
    return (
        <>
            <h1>Welcome to the World of Ice and Fire</h1>
            <p>
                Exokire the rich universe of Game of Thrones and a Song of Ice
                and Fire.
            </p>
            <ul>
                <li>
                    <Link href="/characters">Characters</Link>
                </li>
                <li>
                    <Link href="/books">Books</Link>
                </li>
            </ul>
        </>
    );
}
