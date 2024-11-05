// Call the api with the specific id

export default async function Page({ params }) {
    const { id } = await params;
    const response = await fetch(
        "https://www.anapioficeandfire.com/api/books/" + id
    );
    const book = await response.json();
    console.log(book);

    const isbn: string = book.isbn;
    const authors: Array<string> = book.authors;
    const numPages: number = book.numberOfPages;
    const publisher: string = book.publisher;
    const country: string = book.country;
    const releasedString: string = book.released;
    const releasedDate: Date = new Date(releasedString);
    const day: string = String(releasedDate.getDate());
    const month: string = String(releasedDate.getMonth() + 1);
    const year: string = String(releasedDate.getFullYear());
    const formattedDate: string = `${day}/${month}/${year}`;

    return (
        <>
            <h1>Book Specific</h1>
            <ul>
                <p>ISBN: {isbn}</p>
                <p>
                    Authors:{" "}
                    {authors.map((author) => (
                        <li>{author}</li>
                    ))}
                </p>
                <p>Number of Pages: {numPages}</p>
                <p>Publisher: {publisher}</p>
                <p>Country: {country}</p>
                <p>Released: {formattedDate}</p>
            </ul>
        </>
    );
}
