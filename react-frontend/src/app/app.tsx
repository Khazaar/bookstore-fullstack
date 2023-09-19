import { Provider, useSelector } from 'react-redux';
import { RootState, store } from '../features/store';
import StoreComponent from '../components/store.component';

export function App() {
  return (
    <Provider store={store}>
      <StoreComponent></StoreComponent>
    </Provider>
  );
}

export default App;
