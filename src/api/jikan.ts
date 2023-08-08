import { Popular } from "@/types/popular";
import { useEffect } from "react";

const url = import.meta.env["CONSUMET_API_URL"];

export async function jikanApiData (){
    const data = await fetch(url);
    console.log(data.json());
    // const response = await data as Popular;
    // console.log(response);
    return data.json();
}


