import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Upload  from "./pages/Upload";
import Subcription from "./pages/Subcription";
import Transactions from "./pages/Transactions";
import MyFiles from "./pages/MyFiles"
const App = () => {
  return ( 
     <BrowserRouter>
     <Routes>
      <Route path="/" element = {<Landing/>}/>
      <Route path="/dashboard" element = {<Dashboard/>}/>
      <Route path="/upload" element = {<Upload/>}/>
      <Route path="/my-files" element = {<MyFiles/>}/>
      <Route path="/subcription" element = {<Subcription/>}/> 
      <Route path="/Transaction" element = {<Transactions/>}/>
     </Routes>
     </BrowserRouter>
   );
}

export default App;