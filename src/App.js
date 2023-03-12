import CompanyDetails from "./components/CompanyDetails";
import CompanyPortfolio from "./components/CompanyPortfolio";
import  CreateCompany  from "./components/CreateCompany";
import  CreateUser  from "./components/CreateCompany";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Starter from "./components/Starter";

function App() {
  return (
    <>
      
     {/* 
     <CreateUser/>
     <CreateCompany />*/}
      <Starter />
      <Navigation />
      <CompanyPortfolio />
      <CompanyDetails/>
      <Footer />
    </>
  );
}

export default App;
