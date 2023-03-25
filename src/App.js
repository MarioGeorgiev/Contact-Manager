import { Route, Routes } from "react-router-dom";

import Starter from './components/Stater/Starter'
import CompaniesList from './components/Company/CompaniesList'
import CompanyDetails from './components/Company/CompanyDetails'
import Footer from './components/Footer/Footer'
import CreateEmployee from "./components/Employee/CreateEmployee";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import { AuthProvider } from './contexts/AuthContext';
//import { useAuthContext } from "./contexts/AuthContext";
function App() {

  return (
    <>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Starter/>} />
        <Route path='/companies' element={<CompaniesList/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/companies/:companyId' element={<CompanyDetails/>} />
        <Route path='/companies/edit/:companyId' element={<CreateEmployee/>} />
      </Routes>
      <Footer />
      </AuthProvider>
    </>

  );
}

export default App;
