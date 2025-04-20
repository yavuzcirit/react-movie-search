import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRoutes from './routes';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;