import {
  createStore,
  applyMiddleware,
  combineReducers,
  Action,
  Reducer,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import playerReducer from "../features/player/reducer";
import App from "next/app";
import { Provider } from "react-redux";

export interface InitialState {}

export const initialState: InitialState = {};

export interface DispatchAction extends Action {
  payload: Partial<InitialState>;
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (
  state,
  action
) => {
  return initialState;
};

export const store = createStore<InitialState, DispatchAction, null, null>(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
