import { CLEAR_CART, REMOVE_ITEM, INCREASE_ITEM, DECREASE_ITEM, LOADING, DISPLAY_ITEMS } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case DISPLAY_ITEMS:
      const newProducts = new Map(action.payload.cart.map(item => [item.id, item]));
      return {
        ...state,
        loading: false,
        cart: newProducts,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: new Map(),
      };
    case REMOVE_ITEM:
      //let newCart = state.cart.filter(item => item.id !== action.payload.id);
      const newCart = new Map(state.cart);
      newCart.delete(action.payload.id);
      return {
        ...state,
        cart: newCart,
      };
    case INCREASE_ITEM:
      const newItems = new Map(state.cart);
      const itemId = action.payload.id;
      const item = newItems.get(itemId);
      const newItem = { ...item, amount: item.amount + 1 };
      newItems.set(itemId, newItem);
      return {
        ...state,
        cart: newItems,
      };
    case DECREASE_ITEM:
      const updatedItems = new Map(state.cart);
      const newItemId = action.payload.id;
      const theItem = updatedItems.get(newItemId);
      if (theItem.amount === 1) {
        updatedItems.delete(newItemId);
        return {
          ...state,
          cart: updatedItems,
        };
      }
      const updatedItem = { ...theItem, amount: theItem.amount - 1 };
      updatedItems.set(newItemId, updatedItem);
      return {
        ...state,
        cart: updatedItems,
      };

    default:
      //return state;
      throw new Error(`No matching action type: ${action.type}`);
  }
};

export default reducer;
