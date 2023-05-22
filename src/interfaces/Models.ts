export interface User
{
    id          ?: number;
    name        : string;
    last_name   : string;
    email       : string;
    user_rol    : string;
}

export interface Book
{
    id              ?: number;
    title           : string;
    author          : string;
    published_year  : string|number;
    genre_id        : string|number
    genre           ?: Genre;
    stock           : number;
}

export interface Genre
{
    id      : number;
    name    : string;
}

export interface Checkout
{
    id              ?: number;
    user            : User;
    book            : Book;
    book_genre      : Genre;
    checkout_date   : string;
    return_date     : string|null;
}
 
