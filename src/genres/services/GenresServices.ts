import { HttpClient } from  '../../api/HttClient';
import {  Genre } from '../../interfaces/Models';
import { HttpCollection } from '../../interfaces/HttpRequest';

const GenresList = async () => {
    const response = await HttpClient.get<HttpCollection<Genre>>('genres');
    return response.data;
}

export {
    GenresList,
}