
import EndLayout from '@/Layout/end-layout'
import Courses from '@/pages/cources'
import {Routes, Route} from 'react-router-dom'

const EndRoute = () => {
    return (

        <Routes>
        <Route path='/' element={<EndLayout/>} >
        
          <Route index element={<Home />} />
          <Route path='/Courses' element={<Courses/>} />
          
        </Route>
      </Routes>
    )
}

export default EndRoute