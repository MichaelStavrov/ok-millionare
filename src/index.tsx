import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import './index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

const isProd = process.env.NODE_ENV === 'production';

root.render(
  <BrowserRouter basename={isProd ? 'ok-millionare/' : '/'}>
    <App />
  </BrowserRouter>
);
