import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./page/register";
import Login from "./page/Login";
import Home from "./page/Home";
import AuctionHomepage from "./page/mainhome"
import Admin_Register from "./Admin/register_admin";
import Admin_Login from "./Admin/admin_login"
import Item from "./iteampage/item"
import Displayproduct from "./iteampage/displayproduct"
import Chatbot from "./bot/priceprediction";
import Editbid from "./iteampage/Editbid";
import Admindisplayproduct from "./Admin/admindispaly";
import Delect from "./Admin/Deleteitem";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<AuctionHomepage/>} />
        <Route path="/pricepredition" element={<Chatbot/>}/>
        <Route path='/adminproduct/:id' element={<Delect/>}/>
        <Route path="/adminproduct" element={<Admindisplayproduct/>}/>
        <Route path="product/:id" element={<Editbid/>}/>
        <Route path="/registerproduct" element={<Item/>}/>
        <Route path="/product" element={<Displayproduct/>}/>
        <Route path="/admin_register" element={<Admin_Register/>}/>
        <Route path="/admin_Login" element={<Admin_Login/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
