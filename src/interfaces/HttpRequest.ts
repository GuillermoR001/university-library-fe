export interface HttpCollection<T> 
{
    data: T[]
}

export interface HttpSingle<T> 
{
    data: T
}

export interface SmallAction
{
    message         : string;
    response_code   : number;
    status          : number;
}