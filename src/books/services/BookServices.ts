import { HttpClient } from  '../../api/HttClient';
import { Book } from '../../interfaces/Models';
import { HttpCollection, HttpSingle, SmallAction} from '../../interfaces/HttpRequest';

const GetBooks = async () => {
    const response = await HttpClient.get<HttpCollection<Book>>('books/list');
    return response.data;
}

const BookGet = async (id: string|undefined) => {
    const response = await HttpClient.get<HttpSingle<Book>>(`books/detail/${id}`);
    return response.data;
}

const BookCreate = async (book: Book) => {
    const response = await HttpClient.post<SmallAction>('books/store', book);
    return response.data;
}

const BookEdit = async (id: string|undefined, book: Book) => {
    const response = await HttpClient.put<SmallAction>(`books/edit/${id}`, book);
    return response.data;
}

const FilterBooks = async (search: string, genreId : string) => {
    const response = await HttpClient.post<HttpCollection<Book>>(`books/filter`, {
            search,
            genre_id: genreId
        }
    );
    return response.data;
}

export {
    GetBooks,
    BookGet,
    BookCreate,
    BookEdit,
    FilterBooks
}