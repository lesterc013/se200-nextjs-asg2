// Call the api with the specific id

export default async function Page({ params }) {
    const { id } = await params;
    const response = await fetch(
        "https://www.anapioficeandfire.com/api/characters/" + id
    );
    const character = await response.json();
    const name = character.name ? character.name : character.aliases[0];
    const gender = character.gender;
    const culture = character.culture ? character.culture : "Unknown";
    const born = character.born ? character.born : "Unknown";
    const died = character.died ? character.died : "Unknown";
    return (
        <>
            <h1>{name}</h1>
            <p>Name: {name}</p>
            <p>Gender: {gender}</p>
            <p>Culture: {culture}</p>
            <p>Born: {born}</p>
            <p>Died: {died}</p>

            <h2>Titles</h2>
            <ul>
                {character.titles.map((title) => (
                    <li>{title}</li>
                ))}
            </ul>

            <h2>Aliases</h2>
            <ul>
                {character.aliases.map((alias) => (
                    <li>{alias}</li>
                ))}
            </ul>
        </>
    );
}
