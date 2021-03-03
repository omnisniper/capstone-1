import { CartActionTypes } from "./cart-types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItem: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItem: addItemToCart(state.cartItem, action.payload),
            };
        case CartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItem: state.cartItem.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItem: removeItemFromCart(state.cartItem, action.payload),
            };

        default:
            return state;
    }
};

export default cartReducer;
