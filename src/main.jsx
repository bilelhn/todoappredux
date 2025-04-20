import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './Components/Details.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
   <Provider store={store}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/todo/:id" element={<Details />} />
    </Routes>
    </Provider>
  </BrowserRouter>
);
