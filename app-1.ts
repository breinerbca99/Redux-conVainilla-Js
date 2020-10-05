// Acciones 
interface Action{
    type: string;
    payload?: any;
}



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
           default: 
               return state;
       }
}

// Usamos el reduce

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};
const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
};

// Ejecutando
console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicarAction));
console.log(reducer(10, dividirAction));