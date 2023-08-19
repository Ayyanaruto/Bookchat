import axios from "axios";
import { Dispatch } from "redux";
import { Actions, AuthAction, User, ProductAction, Product,OrderAction,AdminAction } from "./types";
import history from "../history";
import { toast } from "react-hot-toast";
import { set } from "lodash";

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
    dispatch({ type: Actions.ORDER_LOADING, payload: true });
    try {
      const { data } = await axios.post("/api/payment/orders", order);
      dispatch({ type: Actions.CREATE_ORDER, payload: data });
    } catch (e) {
      if (e instanceof Error) {
        dispatch({ type: Actions.ORDER_ERROR, payload: e.message });
      }
    }
  }

  export const fetch_orders = () => async (dispatch: Dispatch<OrderAction>) => {
    dispatch({ type: Actions.ORDER_LOADING, payload: true });
    try {
      const { data } = await axios.get("/api/payment/orders");
      dispatch({ type: Actions.FETCH_ORDERS, payload: data });
    } catch (e) {
      if (e instanceof Error) {
        dispatch({ type: Actions.ORDER_ERROR, payload: e.message });
      }
    }
  }
  export const fetch_order = (id:string) => async (dispatch: Dispatch<OrderAction>) => {
    dispatch({ type: Actions.ORDER_LOADING, payload: true });
    try {
      const { data } = await axios.get(`/api/admin/orders/${id}`);
      dispatch({ type: Actions.FETCH_ORDER, payload: data });
    } catch (e) {
      if (e instanceof Error) {
        dispatch({ type: Actions.ORDER_ERROR, payload: e.message });
      }
    }
  }
  export const update_order = (id:string,status:string) => async (dispatch: Dispatch<OrderAction>) => {
    dispatch({ type: Actions.ORDER_LOADING, payload: true });
    try {
      console.log(status);
      const { data } = await axios.patch(`/api/admin/orders/${id}`,{
        status
      });
      console.log(data);
      dispatch({ type: Actions.UPDATE_ORDER, payload: data });
    } catch (e) {
      if (e instanceof Error) {
        dispatch({ type: Actions.ORDER_ERROR, payload: e.message });
      }
    }
  }
  export const delete_order = (id:string) => async (dispatch: Dispatch<OrderAction>) => {
    dispatch({ type: Actions.ORDER_LOADING, payload: true });
    try {
      const { data } = await axios.delete(`/api/admin/orders/${id}`);
      dispatch({ type: Actions.DELETE_ORDER, payload: data });
    } catch (e) {
      if (e instanceof Error) {
        dispatch({ type: Actions.ORDER_ERROR, payload: e.message });
      }
    }
  }

export const login_admin = (formValues:any) => async (dispatch: Dispatch<AdminAction>) => {
  dispatch({ type: Actions.ADMIN_LOADING, payload: true });
  try {
    const { data } = await axios.post("/api/admin/login", formValues);
    dispatch({ type: Actions.LOGIN_ADMIN, payload: data });

    history.push("/admin/products");
    history.go(0);
  } catch (e) {
    if (e instanceof Error) {
      dispatch({ type: Actions.ADMIN_ERROR, payload: e.message });
    }
  }
}
export const logout_admin = () => async (dispatch: Dispatch<AdminAction>) => {
  dispatch({ type: Actions.ADMIN_LOADING, payload: true });
  try {
    const { data } = await axios.post("/api/admin/logout");
    dispatch({ type: Actions.LOGOUT_ADMIN, payload: data });
    history.push("/admin/login");  
  } catch (e) {
    if (e instanceof Error) {
      dispatch({ type: Actions.ADMIN_ERROR, payload: e.message });
    }
  }
}

export const fetch_admin = () => async (dispatch: Dispatch<AdminAction>) => {
  dispatch({ type: Actions.ADMIN_LOADING, payload: true });
  try {
    const { data } = await axios.get("/api/admin/current_admin");
    dispatch({ type: Actions.FETCH_ADMIN, payload: data });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({ type: Actions.ADMIN_ERROR, payload: e.message });
    }
  }
}
export const register_admin = (formValues:any) => async (dispatch: Dispatch<AdminAction>) => {
  dispatch({ type: Actions.ADMIN_LOADING, payload: true });
  try {
    const { data } = await axios.post("/api/admin/register", formValues);
    dispatch({type: Actions.CREATE_ADMIN, payload: data});
  }catch (e) {
    if (e instanceof Error) {
      dispatch({ type: Actions.ADMIN_ERROR, payload: e.message });
    }
  }
};

