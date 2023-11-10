import { legacy_createStore as createStore } from "redux";
import reducer from "../utils/reducers";

const store = createStore(reducer);

export default store;