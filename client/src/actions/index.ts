import axios from "axios";
import { Dispatch } from "redux";
import { Actions, AuthAction, User, ProductAction, Product,OrderAction } from "./types";
import history from "../history";

export const fetch_user = () => async (dispatch: Dispatch<AuthAction>) => {
  dispatch({ type: Actions.FETCH_LOADING, payload: true });
  try {
    const { data } = await axios.get<User>("/api/current_user");
    dispatch({ type: Actions.FETCH_SUCCESS, payload: data });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({ type: Actions.FETCH_ERROR, payload: e.message });
    }
  }
};

export const create_product =
  (formValues: Product) => async (dispatch: Dispatch<ProductAction>) => {
    try {
      const response=await axios.post("/api/admin/products", formValues);
      console.log(response);
      dispatch({ type: Actions.CREATE_PRODUCTS });
      history.push("/admin/products");
      history.go(0);
    } catch (e) {
      if (e instanceof Error) {
        dispatch({ type: Actions.PRODUCTS_ERROR, payload: e.message });
      }
    }
  };
export const fetch_products =
  () => async (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: Actions.FETCH_PRODUCTS_LOADING, payload: true });
    try {
      const { data } = await axios.get<Product[]>("/api/admin/products");
      dispatch({ type: Actions.FETCH_PRODUCTS, payload: data });
    } catch (e) {
      if (e instanceof Error) {
        dispatch({ type: Actions.PRODUCTS_ERROR, payload: e.message });
      }
    }
  };
export const fetch_product =
  (id: string) => async (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: Actions.FETCH_PRODUCTS_LOADING, payload: true });
    try {
      const { data } = await axios.get<Product>(`/api/admin/products/${id}`);
      dispatch({ type: Actions.FETCH_PRODUCT, payload: data });
    } catch (e) {
      if (e instanceof Error) {
        dispatch({ type: Actions.PRODUCTS_ERROR, payload: e.message });
      }
    }
  };

export const edit_product =
  (formValues: Product, id: string) =>
  async (dispatch: Dispatch<ProductAction>) => {
    try {
      const response = await axios.patch(
        `/api/admin/products/${id}`,
        formValues
      );
      dispatch({ type: Actions.EDIT_PRODUCTS });
      history.push("/admin/products");
      history.go(0);
    } catch (e) {
      if (e instanceof Error) {
        dispatch({ type: Actions.PRODUCTS_ERROR, payload: e.message });
      }
    }
  };

  export const delete_product =(id:string,imageId:string)=>async(dispatch:Dispatch<ProductAction>)=>{
    try {
      const response = await axios.delete(
        `/api/admin/products/${id}`,{
          data:{
            imageId

          }

        }
      );
      console.log(response);
      dispatch({ type: Actions.DELETE_PRODUCTS });
      history.push("/admin/products");
      history.go(0);
    } catch (e) {
      if (e instanceof Error) {
        dispatch({ type: Actions.PRODUCTS_ERROR, payload: e.message });
      }
    }
  }
  export const create_order = (order:any) => async (dispatch: Dispatch<OrderAction>) => {
    try {
      const { data } = await axios.post("/api/payment/orders", order);
      dispatch({ type: Actions.CREATE_ORDER, payload: data });
    } catch (e) {
      if (e instanceof Error) {
        dispatch({ type: Actions.ORDER_ERROR, payload: e.message });
      }
    }
  }
