import { DETAILS, FILTER } from "../Actionsapp/types";

const initialState = {
    CarDetail : [],
    DataCar : [ 
        { id : 1 , marque : 'audi' , modele : 'Q8' , type : 'diesel' , fiche : '2023 Boite Automatique' , prix : 800000 },
        { id : 2 , marque : 'opel' , modele : 'astra' , type : 'Essence' , fiche : '2020 Boite manuel' , prix : 250000 }
    ] ,
    ItemSelect : []
}

const firstreducer = (state = initialState , action) =>{
    switch (action.type) {
        case DETAILS:
            return {
                ...state ,
                CarDetail : action.payload
            }
        case FILTER:
            return {
                ...state ,
                ItemSelect : action.payload
            }
        default:
            break;
    }
    return state;
}

export default firstreducer;