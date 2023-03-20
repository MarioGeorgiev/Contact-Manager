import { Route, Routes } from "react-router-dom";

import Starter from './components/Stater/Starter'
import CompaniesList from './components/Company/CompaniesList'
import CompanyDetails from './components/Company/CompanyDetails'
import Footer from './components/Footer/Footer'
import CreateEmployee from "./components/Employee/CreateEmployee";

function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Starter/>} />
        <Route path='/companies' element={<CompaniesList/>} />
        <Route path='/companies/:companyId' element={<CompanyDetails/>} />
        <Route path='/companies/edit/:companyId' element={<CreateEmployee/>} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
