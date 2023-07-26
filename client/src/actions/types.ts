import { type } from "os";

export enum Actions{
    FETCH_SUCCESS = 'fetch_success',
    FETCH_ERROR = 'fetch_error',
    FETCH_LOADING = 'fetch_loading',
    CREATE_PRODUCTS = 'create_product',
    PRODUCTS_ERROR = 'product_error',
    FETCH_PRODUCTS='fetch_products',
    FETCH_PRODUCTS_LOADING='fetch_products_loading',
    FETCH_PRODUCT='fetch_product',
    EDIT_PRODUCTS='edit_products',
    DELETE_PRODUCTS='delete_products',
    CREATE_ORDER='create_order',
    ORDER_ERROR='order_error'
}

export interface User{
    _id:string;
    googleId: string;
    email: string;
    displayName: string;
}

interface FetchUserAction{
    type: Actions.FETCH_SUCCESS;
    payload: User
}
 interface FetchErrorAction{
    type: Actions.FETCH_ERROR;
    payload: string
}
 interface FetchLoadingAction{
    type: Actions.FETCH_LOADING;
    payload: boolean
}
export interface AuthState{
    user:User|null,
    isLoading:boolean
    error:string|null

}

export type AuthAction = FetchUserAction|FetchErrorAction|FetchLoadingAction;
//products

export interface Product{
    _id:string;
    name: string;
    description: string;
    discount: number;
    price: number;
    image: string;
    imageId: string;
    countInStock: string;
}
interface CreateProductAction{
    type: Actions.CREATE_PRODUCTS;
}

interface ProductErrorAction{
    type: Actions.PRODUCTS_ERROR;
    payload: string;
}
interface FetchProductsAction{
    type: Actions.FETCH_PRODUCTS;
    payload: Product[];
} 

interface FetchProductsLoadingAction{
    type: Actions.FETCH_PRODUCTS_LOADING;
    payload: boolean;
}
interface EditProductsAction{
    type: Actions.EDIT_PRODUCTS;
}
interface FetchProductAction{
    type: Actions.FETCH_PRODUCT;
    payload: Product;
}
interface DeleteProductsAction{
    type: Actions.DELETE_PRODUCTS;
}
export interface ProductState{
    error: string|null;
    isLoading: boolean;
    products: Product[];
}
//ORDERS
export interface Order_details{
    _id:string;
    name: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    quantity: number;
    amount: number;
    User: string;
    product: string;
}
interface CreateOrderAction{
    type: Actions.CREATE_ORDER;
}
interface OrderErrorAction{
    type: Actions.ORDER_ERROR;
    payload: string;
}
export interface OrderState{
    error: string|null;
    isLoading: boolean;
    orders: Order_details[];
}
 export type OrderAction = CreateOrderAction|OrderErrorAction;


export type ProductAction =
  | CreateProductAction
  | ProductErrorAction
  | FetchProductsAction
  | FetchProductsLoadingAction
  | FetchProductAction
  |EditProductsAction
  |DeleteProductsAction;