import { useState, useEffect } from 'react';
import { GenresList } from "../../genres/services/GenresServices";
import { Genre } from "../../interfaces/Models";



export const GenreSelect = ({ name = "genre_id", hangleChange }: any) => {

    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        fetchGenres()
    }, []);

    const fetchGenres = async () :Promise<void> => {
        try {
            const { data } = await GenresList();
            setGenres( data );
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <select className="my-select" id="genre-select" name={name} onChange={hangleChange}>
            <option value="">Select book genre</option>
            {
                genres.map((genre, i) => {
                    return <option key={i} value={genre.id}>{genre.name}</option>
                })
            }
        </select>
    )
}
