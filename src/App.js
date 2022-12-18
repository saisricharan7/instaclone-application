import {React} from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Landing from './project/landing';
import Post from './project/post';
import Form from './project/form';
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/form' element={<Form/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
