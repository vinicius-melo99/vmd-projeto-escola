import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import history from './services/history';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router history={history}>
    <App />
  </Router>
);
