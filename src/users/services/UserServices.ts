import { HttpClient } from  '../../api/HttClient';
import { User } from '../../interfaces/Models';
import { HttpCollection, HttpSingle, SmallAction} from '../../interfaces/HttpRequest';

const GetUsers = async () => {
    const response = await HttpClient.get<HttpCollection<User>>('users');
    return response.data;
}

const GetUser = async (id: string|undefined) => {
    const response = await HttpClient.get<HttpSingle<User>>(`users/${id}`);
    return response.data;
}

const UserCreate = async (user: User) => {
    const response = await HttpClient.post<SmallAction>('users', user);
    return response.data;
}

const UserEdit = async (id: string|undefined, user: User) => {
    const response = await HttpClient.put<SmallAction>(`users/${id}`, user);
    return response.data;
}


export {
    GetUsers,
    GetUser,
    UserCreate,
    UserEdit,
}