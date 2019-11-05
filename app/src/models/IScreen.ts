


export interface ISpace{
    screens:IScreen[],
    name:string
}

export interface IScreen{
    name:string,
    status:string,
    group:string,
    orientation:string,
    playing: string[]
}


export interface ILastUpdted{
    avatar: string,
    name: string,
    date: string
}

