import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from './core/routes/Routes';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
