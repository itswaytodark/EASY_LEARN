import EndLayout from "@/Layout/end-layout";
import Home from "../pages/home";
import Login_page from "../pages/login_page";
import {Routes, Route} from 'react-router-dom'
import Courses from "../pages/cources";
import Ai_teacher_page from "@/pages/ai_teacher";
import About_us_page from "@/pages/about_us";
import CourseDetail from "@/pages/CourseDetail";
import ForgetPassword from "@/pages/forgetPassword";
import ResetPassword from "@/pages/resetPassword";

const EndRoute = () => {

  return (
    
    <Routes>
      <Route element={<EndLayout />}>

      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login_page/>} />
      <Route path="/blogs" element={<Courses/>} />
      <Route path="/AITeacher" element={<Ai_teacher_page/>} />
      <Route path="/AboutUs" element={<About_us_page/>} />
      <Route path={`/Courses/:id`} element={<CourseDetail/>}/>
      <Route path={"/forgot-password"} element={<ForgetPassword/>}/>
      <Route path={"/reset-password/:token"} element={<ResetPassword/>}/>
      
      </Route>
    </Routes>

    )
}

export default EndRoute