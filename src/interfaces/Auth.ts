export interface Auth 
{
    token       : string;
    token_type  : string;
    expires_in  : number;
}

export interface User
{
    name        : string;
    last_name   : string;
    user_rol    : string;
}

export interface JWTDecoded extends User
{
    iat: number;
    exp: number;
    nbf: number;
    sub: string;
}

export interface AuthContextType 
{
    logged : boolean;
    user : User|null;
    login() : void;
    logout() : void;
}