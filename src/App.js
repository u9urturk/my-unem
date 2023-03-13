import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Loading from './components/Loading';
import { useEffect, useState } from 'react';
import Comments from './pages/Comments';

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
    <div className='min-w-[300px] h-full overflow-hidden  bg-gradient-to-b  from-lime-600   to-lime-100'> 
        <Navbar></Navbar>
        <Home></Home>
        <Comments></Comments>
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
