import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'; // Ваш Redux Store
import App from './App';
import './index.css'; // Стилі вашого додатку
import reportWebVitals from './reportWebVitals'; // Для вимірювання продуктивності

// Створення кореневого елемента
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендеринг з Redux, React Router і StrictMode
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// Виклик функції для збору даних про продуктивність
reportWebVitals();
