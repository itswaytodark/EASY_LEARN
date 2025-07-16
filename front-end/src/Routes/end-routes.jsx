import EndLayout from "@/Layout/end-layout";
import Home from "../pages/home";
import Login_page from "../pages/login_page";
import {Routes, Route, useParams} from 'react-router-dom'
import Courses from "../pages/cources";
import Ai_teacher_page from "@/pages/ai_teacher";
import About_us_page from "@/pages/about_us";
import CourseDetail from "@/pages/CourseDetail";

const EndRoute = () => {

  return (
    
    <Routes>
      <Route element={<EndLayout />}>

      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login_page/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/AITeacher" element={<Ai_teacher_page/>} />
      <Route path="/AboutUs" element={<About_us_page/>} />
      <Route path={`/Courses/:id`} element={<CourseDetail/>}/>
      
      </Route>
    </Routes>

    )
}

export default EndRoute