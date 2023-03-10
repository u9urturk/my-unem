import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Loading from './components/Loading';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setisLoading] = useState(false)
  const test= ()=>{
    console.log(isLoading)

    setTimeout(() => {
      setisLoading(true)

      console.log(isLoading)
    }, 3000);
  }

  useEffect(() => {
    test()

  }, [])
  
  if(isLoading === true) {
    return (
    <div className=''> 
        <Navbar></Navbar>
        <Home></Home>
        
    </div>
  )}else{

    return(
      <div className=''>
        <Loading></Loading>
      </div>
    )
  }
}

export default App;
