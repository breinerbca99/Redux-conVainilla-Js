import {Action} from './ngrx-fake/ngrx';
import {incrementadorAction,decrementadorAction,multiplicarAction,dividirAction,resetAction} from './contador/contador.actions';

/* Recibe como parametro el estado y la accion */
// El objetivo del reduce es regresar un nuevo estado
function reducer(state = 19, action: Action){
       
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

// Ejecutando
console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicarAction));
console.log(reducer(10, dividirAction));
console.log(reducer(10, resetAction));