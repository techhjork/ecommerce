import {
  PRODUCT_List_FAIL,
  PRODUCT_List_LOAD,
  PRODUCT_List_SUCCESS
} from "../constant/productList";
import products from "../products";
export const listProduct = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_List_LOAD });
    const data = products;
    console.log(data);
    dispatch({
      type: PRODUCT_List_SUCCESS,
      payload: data
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: PRODUCT_List_FAIL,
      errors: err
    });
  }
};
