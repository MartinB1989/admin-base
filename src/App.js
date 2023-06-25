import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
