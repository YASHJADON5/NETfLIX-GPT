import { useState } from 'react'

import { BrowserRouter ,Route , Routes } from 'react-router-dom'


import Browse from './Pages/Browse'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
           <Routes>

            <Route path="/" element={<Signin/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            
            <Route path='/dashboard' element={<Browse/>}></Route>

           </Routes>
    </BrowserRouter>
  
    </>
   
  )
}

export default App
