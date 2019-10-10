import { SET_USER, UNSET_USER, SET_CART } from "../type";
// import { getSingleUserApi, setCartApi } from "../services/api";

// export const setUser = (user, cart = null) => dispatch => {
//
//     if (user._id) {
//       getSingleUserApi(user._id)
//         .then(res => res.json())
//         .then(res => {
  
//           if (res.status && res.user) {
//             dispatch(getUserMeta(res.user._id, cart));
//             if (cart) {
//               setCartApi({
//                 usermetaid: res.user._id,
//                 cart: cart
//               });
//             } else if (res.user.cart) {
//               console.log({
//                 cart,
//                 res
//               });
//               dispatch({
//                 type: SET_CART,
//                 payload: res.user.cart
//               });
//             }
//           }
//         });
//     }
//     dispatch({
//       type: SET_USER,
//       payload: user
//     });
//   };

export const setUser = (user) => ({
    payload: user,
    type: SET_USER
})

export const unsetUser = () => ({
    payload: null,
    type: UNSET_USER
})