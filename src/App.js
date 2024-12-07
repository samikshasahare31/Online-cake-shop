import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './component/Layout';
import Home from './component/Home';
import Contact from './component/Contact';
import Order from './component/Order';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Layout />}>
            <Route path="*" element={<Home />} />
            <Route path="contact" element={<Contact />} />
             <Route path="order" element={<Order />} />
            {/* <Route path="login" element={<LoginReg />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} /> */}
          </Route>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
