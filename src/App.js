import  CompanyPortfolio  from "./components/CompanyPortfolio";
import { CreateCompany } from "./components/CreateCompany";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Starter from "./components/Starter";

function App() {
  return (
    <>
    {/*<CreateCompany/>*/}
    <Starter/>
    <Navigation/>
    <CompanyPortfolio/>
  <Footer/>
    </>
  );
}

export default App;
