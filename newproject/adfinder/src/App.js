  //page wise redirect component import.....
// import { Route, Routes } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';

import './App.css';
import Home from "./component/Home";
import Login from './component/Login';
import Signup from './component/Signup';
import Forgotpassword from './component/Forgotpassword';
import Createpost from './component/Createpost';
import Category from './component/Category';

function App() {
  return (
 <>
 <Routes>
 <Route exact path="/" element={<Home/>}/>
 <Route exact path="Login" element={<Login/>}/>
 <Route exact path="Signup" element={<Signup/>}/>
 <Route exact path="Forgotpassword" element={<Forgotpassword/>}/>
 <Route exact path="Createpost" element={<Createpost/>}/>
  <Route exact path="Category" element={<Category/>}/>

 {/* <Route exact path='myaccount/' element={</>}/> */}
 </Routes>
 </>
  );
}

export default App;
