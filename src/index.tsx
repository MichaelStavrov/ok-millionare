import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import packageJSON from '../package.json';
import App from 'components/App';
import './index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

const isProd = process.env.NODE_ENV === 'production';
const version = packageJSON.version.replace(/\./g, '-');

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
