import { contadorReducer } from "./contador/contador.reducer";
import { Action, Reducer } from "./ngrx-fake/ngrx";
import { incrementadorAction, multiplicarAction } from './contador/contador.actions';

class Store<T>{
   /*  private state: T; */

    constructor(private reducer: Reducer<T>, private state: T){

    }

    getState(){
        return this.state;
    }

    // Vamos a llamar a las funciones
    dispatch( action: Action){
        this.state = this.reducer(this.state,action);
    }
}

const store = new Store(contadorReducer,10);

console.log(store.getState());

store.dispatch(incrementadorAction); //11
store.dispatch(incrementadorAction); //12

console.log(store.getState());

store.dispatch(multiplicarAction);
console.log(store.getState());
