import Link from "next/link";

export default async function Page() {
    const response = await fetch("https://www.anapioficeandfire.com/api/books");
    const books = await response.json();
    console.log(books);

    // book.name
    // Get the id from /books
    return (
        <>
            <h1>Books</h1>
            <ul>
                {books.map((book) => (
                    <li>
                        <Link
                            href={`${book.url.slice(
                                book.url.indexOf("/books")
                            )}`}
                        >
                            {book.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
