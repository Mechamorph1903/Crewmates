import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <nav>
      <img src="https://cdn.thegamesdb.net/images/medium/fanart/108802-1.jpg" alt="Crewmate with pumpkin hat" height={'200px'} width={'300px'}/>       
       <ul>
          <li>
            <Link to="home" className='link'>Home</Link>
          </li>
          <li>
          <Link to="CaC" className='link'>Create a Crewmate</Link>
          </li>
          <li>
          <Link to="gallery" className='link'>Crewmate Gallery</Link>
          </li>
        </ul>
      </nav>
      <div className='outlet'>
      <Outlet/>
      </div>
    </div>
  )
}

export default App
