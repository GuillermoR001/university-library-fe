import { HttpClient } from  '../../api/HttClient';
import { Checkout } from '../../interfaces/Models';
import { HttpCollection, HttpSingle, SmallAction} from '../../interfaces/HttpRequest';

const CheckoutsList = async () => {
    const response = await HttpClient.get<HttpCollection<Checkout>>('checkouts/list');
    return response.data;
}

const CheckoutsStudentList = async () => {
    const response = await HttpClient.get<HttpCollection<Checkout>>('checkouts/my-checkouts');
    return response.data;
}

const CheckoutGet = async (id: string|undefined) => {
    const response = await HttpClient.get<HttpSingle<Checkout>>(`checkouts/show/${id}`);
    return response.data;
}

const CheckoutEdit = async (id: string|undefined, checkout: Checkout) => {
    const response = await HttpClient.put<SmallAction>(`checkouts/edit/${id}`, checkout);
    return response.data;
}

const CheckouAdd = async (id: string|undefined) => {
    const response = await HttpClient.post<SmallAction>('checkouts/add', {
        book_id : id
    });
    return response.data;
}

const CheckoutAsReturned = async (id: string|undefined) => {
    const response = await HttpClient.put<SmallAction>(`checkouts/return-book/${id}`);
    return response.data;
}

export {
    CheckoutsList,
    CheckoutGet,
    CheckoutEdit,
    CheckoutAsReturned,
    CheckoutsStudentList,
    CheckouAdd
}