import { type } from "os";

export enum Actions {
  FETCH_SUCCESS = "fetch_success",
  FETCH_ERROR = "fetch_error",
  FETCH_LOADING = "fetch_loading",
  CREATE_PRODUCTS = "create_product",
  PRODUCTS_ERROR = "product_error",
  FETCH_PRODUCTS = "fetch_products",
  FETCH_PRODUCTS_LOADING = "fetch_products_loading",
  FETCH_PRODUCT = "fetch_product",
  EDIT_PRODUCTS = "edit_products",
  DELETE_PRODUCTS = "delete_products",
  CREATE_ORDER = "create_order",
  ORDER_ERROR = "order_error",
  ORDER_LOADING = "order_loading",
  FETCH_ORDERS = "fetch_orders",
  FETCH_ORDER = "fetch_order",
  UPDATE_ORDER = "update_order",
  CREATE_ADMIN = "create_admin",
  ADMIN_ERROR = "admin_error",
  ADMIN_LOADING = "admin_loading",
  LOGIN_ADMIN = "login_admin",
  LOGOUT_ADMIN = "logout_admin",
  FETCH_ADMIN = "fetch_admin",
  DELETE_ORDER = "delete_order",

}

export interface User {
  _id: string;
  googleId: string;
  email: string;
  displayName: string;
}

interface FetchUserAction {
  type: Actions.FETCH_SUCCESS;
  payload: User;
}
interface FetchErrorAction {
  type: Actions.FETCH_ERROR;
  payload: string;
}
interface FetchLoadingAction {
  type: Actions.FETCH_LOADING;
  payload: boolean;
}
export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export type AuthAction =
  | FetchUserAction
  | FetchErrorAction
  | FetchLoadingAction;
//products

export interface Product {
  _id: string;
  name: string;
  description: string;
  discount: number;
  price: number;
  image: string;
  imageId: string;
  countInStock: string;
}
interface CreateProductAction {
  type: Actions.CREATE_PRODUCTS;
}

interface ProductErrorAction {
  type: Actions.PRODUCTS_ERROR;
  payload: string;
}
interface FetchProductsAction {
  type: Actions.FETCH_PRODUCTS;
  payload: Product[];
}

interface FetchProductsLoadingAction {
  type: Actions.FETCH_PRODUCTS_LOADING;
  payload: boolean;
}
interface EditProductsAction {
  type: Actions.EDIT_PRODUCTS;
}
interface FetchProductAction {
  type: Actions.FETCH_PRODUCT;
  payload: Product;
}
interface DeleteProductsAction {
  type: Actions.DELETE_PRODUCTS;
}
export interface ProductState {
  error: string | null;
  isLoading: boolean;
  products: Product[];
}
//ORDERS
export interface Order_details {
  id: string;
  amount: number;
  currency: string;
  user: string;
}
export interface Order {
  _id: string;
  orderId: string;
  paymentId: string;
  razorpayMethod: string;
  razorpaysignature: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  quantity: number;
  amount: number;
  status: string;
  product: Product[];
  user: string;
  date: Date;
}

interface CreateOrderAction {
  type: Actions.CREATE_ORDER;
  payload: {
    id: string;
    currency: string;
    amount: number;
    user: string;
  };
}
interface OrderErrorAction {
  type: Actions.ORDER_ERROR;
  payload: string;
}
interface OrderLoadingAction {
  type: Actions.ORDER_LOADING;
  payload: boolean;
}
interface FetchOrdersAction {
  type: Actions.FETCH_ORDERS;
  payload: Order[];
}
interface FetchOrderAction {
  type: Actions.FETCH_ORDER;
  payload: Order;
}

interface UpdateOrderAction {
  type: Actions.UPDATE_ORDER;
  payload: string;
}
interface DeleteOrderAction {
  type: Actions.DELETE_ORDER;
  payload: string;
}
export interface OrderState {
  error: string | null;
  isLoading: boolean;
  orders: Order_details | Order[] | Order;
}

export type OrderAction =
  | CreateOrderAction
  | OrderErrorAction
  | OrderLoadingAction
  | FetchOrdersAction
  | FetchOrderAction
  | UpdateOrderAction
  | DeleteOrderAction;

export type ProductAction =
  | CreateProductAction
  | ProductErrorAction
  | FetchProductsAction
  | FetchProductsLoadingAction
  | FetchProductAction
  | EditProductsAction
  | DeleteProductsAction;

//ADMIN
export interface Admin {
  _id: string;
  email: string;
  roles: string;
}
interface CreateAdminAction {
  type: Actions.CREATE_ADMIN;
}

interface AdminErrorAction {
  type: Actions.ADMIN_ERROR;
  payload: string;
}
interface AdminLoadingAction {
  type: Actions.ADMIN_LOADING;
  payload: boolean;
}
interface LoginAdminAction {
  type: Actions.LOGIN_ADMIN;
  payload: string;
}
interface LogoutAdminAction {
  type: Actions.LOGOUT_ADMIN;
  payload: string;
}
interface FetchAdminAction {
  type: Actions.FETCH_ADMIN;
  payload: Admin;
}
export interface AdminState {
  error: string | null;
  isLoading: boolean;
  admin: Admin | Admin[] | null;
  message: string;
}
export type AdminAction =
  | CreateAdminAction
  | AdminErrorAction
  | AdminLoadingAction
  | LoginAdminAction
  | FetchAdminAction
  | LogoutAdminAction;
