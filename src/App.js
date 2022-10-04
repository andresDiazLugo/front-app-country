
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";
import Activity from "./Components/Activity/Activity";
import {Routes,BrowserRouter,Route} from "react-router-dom"
import Landing from "./Components/Landing/Landing";
import Sign from "./Components/SigIn/Sign";
import ProtectRouter from "./Components/ProctectRouter/ProtectRouter";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
            <Route path="/" element={
              <Sign/>
            }/>
             <Route path="/landing" element={
              <ProtectRouter>
                <Landing/>              
              </ProtectRouter>
           }/>
          <Route  path="/home" element={
            <ProtectRouter>
              <Home/>
            </ProtectRouter>
          }/>
          <Route path="/home/detail/:id" element={
            <ProtectRouter>
              <Detail/>
            </ProtectRouter>
          }/>
          <Route path="/home/activity" element={
            <ProtectRouter >
              <Activity/>
            </ProtectRouter>
            }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
