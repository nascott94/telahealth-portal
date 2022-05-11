import Home from './pages/Home';
import Login from './pages/Login';
import NewUser from './pages/NewUser';
import Messages from './pages/Messages';
import Appointments from './pages/Appointments';
import Records from './pages/Records';
import Credentials from './pages/Crendentials';
import Vaccinations from './pages/Vaccinations';
import ProgramsMemberships from './pages/ProgramsMembership';
import ProductServices from './pages/ProductServices';
import Orders from './pages/Orders';
import PDF from './pages/PDF';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="newuser" element={<NewUser />} />
            <Route path="messages" element={<Messages />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="records" element={<Records />} />
            <Route path="credentials" element={<Credentials />} />
            <Route path="vaccinations" element={<Vaccinations />} />
            <Route
              path="programsmemberships"
              element={<ProgramsMemberships />}
            />
            <Route path="productservices" element={<ProductServices />} />
            <Route path="orders" element={<Orders />} />
            <Route path="pdf" element={<PDF />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
