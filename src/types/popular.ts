import { type } from "os";
export type Popular = {
    currentPage?:number;
    hasNextPage?:boolean;
    results?:Results[]
}

type Results = {
id:string;
malId:number;
image?:string
description?:string;
status:string;
rating:number;
releaseDate?:number;
color:string;
genres:string[];
totalEpisodes:number;
duration:number;
type:string
} 

export type Title = {
    romaji?:string;
    english?:string;
    native?:string;
    usePreffered?:string
}

export type Trailer = {
    id?:string;
    site?:string;
    thumbnail?:string
}