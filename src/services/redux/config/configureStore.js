import { createStore, applyMiddleware, compose, 
    combineReducers 
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import sessionStorage from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { createStateSyncMiddleware } from "redux-state-sync";

const middlewares = [
    thunk,
    createStateSyncMiddleware({
        // blacklist: ["extras"]
        whitelist: [
            "user"
        ]
    })
]

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        "user"
    ]
}
// const sessionRedConfig = {
//     key: "other",
//     storage: sessionStorage
// };

// const { referrer, ...otherReducer } = rootReducer;
// const allReducers = combineReducers({
    //   ...otherReducer,
    //   referrer: persistReducer(sessionRedConfig, referrer)
// });
const { user, ...otherReducer } = rootReducer;
const allReducers = combineReducers({
    user,
  ...otherReducer,
//   referrer: persistReducer(sessionRedConfig, referrer)
});
const persistedReducer = persistReducer(persistConfig, allReducers);
// const persistedReducer = persistReducer(persistConfig, rootReducer);
export default () => {
    let store = createStore(
      persistedReducer,
    //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      undefined,
      compose(applyMiddleware(...middlewares))
    );
    let persistor = persistStore(store);
    return { store, persistor };
};
  