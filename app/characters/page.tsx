import Link from "next/link";
// import React, { useState, useEffect } from "react";

/**
 * Call the API for Characters
 * Map the returned characters into own individual links
 * Dynamic routes
 */

export default async function Page() {
    /// If using Client Side Rendering
    // const [characters, setCharacters] = useState(null);
    // useEffect(() => {
    //     fetch("https://www.anapioficeandfire.com/api/characters")
    //         .then((res) => res.json())
    //         .then((data) => setCharacters(data));
    // }, []);
    // console.log(characters);

    /// If using Server Side Rendering
    const response = await fetch(
        "https://www.anapioficeandfire.com/api/characters"
    );
    const characters = await response.json();
    console.log(characters);

    return (
        <>
            <h1>Characters</h1>
            <ul>
                {characters.map((character) => (
                    <li>
                        <Link
                            href={`${character.url.slice(
                                character.url.indexOf("/characters")
                            )}`}
                        >
                            {character.name
                                ? character.name
                                : `${character.aliases[0]} (Alias)`}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
