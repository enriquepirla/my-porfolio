import './App.css'
import About from './Components/About'
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import ProfilePic from './Components/ProfilePic'
import Services from './Components/Services'
import Sidebar from './Components/SideBar'

  export default function App() {
    return (
      <div className='w-screen'>
        <Header/>
        <Sidebar/>
        <div className='ml-[90px]  
        grid grid-cols-1 md:grid-cols-3
        '>
          <div className='col-span-2 p-5 mt-[90px]'>
              <Introduction/>
              <About/>
              <Services/>
          </div>
          <div className='hidden md:block'>
            <ProfilePic/>
         
          </div>
        </div>
        
      </div>
    )
  }


