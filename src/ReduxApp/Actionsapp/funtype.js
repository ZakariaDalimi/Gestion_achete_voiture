import { DETAILS, FILTER } from "./types";

export function Details(idCar){
    return {
        type : DETAILS,
        payload : idCar
    }
}

export function Filters(item){
    return {
        type : FILTER ,
        payload : item
    }
}

