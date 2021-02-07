import React, { useEffect } from 'react';
import {
  LogBox
} from 'react-native';


import { createDispatchHook, Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './src/store'
import ReduxThunk from 'redux-thunk';
import Routers from './src/routers'

const MyContext = React.createContext(null)
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
export const useDispatch = createDispatchHook(MyContext)

const App: () => React$Node = () => {
  useEffect(() => {
   LogBox.ignoreLogs(['Animated: `useNativeDriver`'])
  }, [])
  
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};

export default App;
