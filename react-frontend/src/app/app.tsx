import { Provider, useSelector } from 'react-redux';
import { RootState, store } from '../features/store';
import StoreComponent from '../components/store.component';
import Login from '../components/login';

export function App() {
  return (
    <Provider store={store}>
      <Login>
        <StoreComponent></StoreComponent>
      </Login>
    </Provider>
  );
}

export default App;
