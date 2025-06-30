import EndLayout from "@/Layout/end-layout";
import Home from "../pages/home";
import Login_page from "../pages/login_page";
import {Routes, Route} from 'react-router-dom'
import Courses from "../pages/cources";

const EndRoute = () => {
    return (

    <Routes>
      <Route element={<EndLayout />}>

      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login_page/>} />
      <Route path="/courses" element={<Courses/>} />
      
      </Route>
    </Routes>

    )
}

export default EndRoute