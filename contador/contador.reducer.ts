import { Action } from "../ngrx-fake/ngrx";

/* Recibe como parametro el estado y la accion */
// El objetivo del reduce es regresar un nuevo estado
export function contadorReducer(state = 19, action: Action){
       
    switch( action.type){
        case 'INCREMENTAR':
            return state +=1;
        case 'DECREMENTAR':
            return state -=1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        case 'RESET':
            return state = 0;
        default: 
            return state;
    }
}