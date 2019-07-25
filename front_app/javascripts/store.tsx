import {
  Action, applyMiddleware, compose, createStore, Middleware, Reducer, Store
} from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer, { IRootState } from "./reducers";
// import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [ sagaMiddleware ];
if ( __DEVELOPMENT__ ) {
  const level = {
    action: "log",
    error: "error",
    nextState: "log",
    prevState: false
  };
  middlewares.push( createLogger( { level } ) );
}

let enhancer: any = applyMiddleware( ...middlewares );

const devToolExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
if ( devToolExtension ) {
  enhancer = compose( enhancer, devToolExtension() );
}

function configureStore( initial?: IRootState ): Store<IRootState> {
  const newStore = createStore<IRootState, Action, {}, {}>(
    rootReducer,
    initial!,
    enhancer
  );

  if ( module.hot ) {
    module.hot.accept( "./reducers", () => {
      newStore.replaceReducer( require<{ default: Reducer<IRootState> }>( "./reducers" ).default );
    } );
  }

  return newStore;
}

const store = configureStore();
// sagaMiddleware.run( rootSaga );

export default store;
