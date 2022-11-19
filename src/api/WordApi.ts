export const fetchWords = (word: string) => {
    return (
        fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
            .then((Response) => Response.json())
    )
}