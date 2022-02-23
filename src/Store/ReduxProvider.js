import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";


const reducers = combineReducers({

});


const store = createStore(reducers);


const StoreProvider = ({children}) => <Provider store={store} >{children}</Provider>


export default StoreProvider;
