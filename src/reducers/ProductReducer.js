import {
  PRODUCT_List_FAIL,
  PRODUCT_List_LOAD,
  PRODUCT_List_SUCCESS
} from "../constant/productList";
const initialState = { product_List: [] };
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_List_LOAD:
      return {
        ...state,
        productList: []
      };
    case PRODUCT_List_SUCCESS:
      return {
        ...state,
        productList: payload
      };
    case PRODUCT_List_FAIL:
      return {
        ...state,
        errors: []
      };
    default:
      return state;
  }
};
