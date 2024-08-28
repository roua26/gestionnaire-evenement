import { BrowserRouter, Route, Routes } from "react-router-dom";
import Events from "./events";
import CreatEv from "./CreatEv";
import UpdateEv from "./UpdateEv";
import Nav from "./Nav";
import Singin from "./singin";
import Register from "./Register";

function App (){


  return(
    
     <BrowserRouter>
     <Nav/>
       <Routes>
          <Route path="/" element={<Singin/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/event" element={<Events/>}></Route>
          <Route path="/creat" element={<CreatEv/>}></Route>
          <Route path="/update/:id" element={<UpdateEv/>}></Route>
          

       </Routes>
     </BrowserRouter>

    
  )
}

export default App;
