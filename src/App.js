import { Route, Routes } from "react-router-dom";

import Starter from './components/Stater/Starter'
import CompaniesList from './components/Company/CompaniesList'
import CompanyDetails from './components/Company/CompanyDetails'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Starter/>} />
        <Route path='/companies' element={<CompaniesList/>} />
        <Route path='/companies/:companyId' element={<CompanyDetails/>} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
