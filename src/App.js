import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import User from './roles/user/User';
// import Admin from "./roles/admin/Admin";
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminAccess from './pages/AdminAccessPage/AdminAccessPage';
import AdminPanel from './components/AdminPanel';
import Sidebar from './components/sidebar';


function App() {
  return (
    <>
      <div>
        <section className='base-container'>
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<SignUpPage />} /> */}
              <Route path="/" element={<User />} />
              {/* <Route path="/User/Login" element={<LoginPage />} /> */}
              <Route path="/Admin" element={<Admin />} />

              <Route path='/User/AdminAccess' element={<AdminAccess />} />
            </Routes>
          </BrowserRouter>
        </section>
      </div>
    </>
  );
}

export default App;
