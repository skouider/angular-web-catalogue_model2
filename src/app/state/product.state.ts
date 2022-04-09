
export enum DataStateEnum{

    LOADED,
    LOADING,
    ERROR
}

export interface AppDAtaState<T>{

    dataState?: DataStateEnum,
    data?: T,
    errorMessage?:string
}

// export enum ProductQueryActions{
//     GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS',
//     GET_SELECTED_PRODUCTS = 'GET_SELECTED_PRODUCTS',
//     GET_AVAILABLE_PRODUCTS = 'GET_AVAILABLE_PRODUCTS',
//     EDIT_PRODUCT = 'EDIT_PRODUCT',

// }
// export enum ProductCommandeActions{
//     ADD_PRODUCT = 'ADD_PRODUCT',

// }