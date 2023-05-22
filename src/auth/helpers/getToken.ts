export const getToken = () : string =>  {
    const token = localStorage.getItem('token')
    return `Bearer ${token}`;
}