import { routerReducer as router, RouterState } from "react-router-redux";
import { combineReducers } from "redux";

export interface IRootState {
  router: RouterState;
}

export default combineReducers<IRootState>( {
  router
} );
