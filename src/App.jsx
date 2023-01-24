import Navbar from "./components/Navbar"
import {Header, Cost} from "./containers"

function App() {
 

  return (
    <main>
      <div className={`bg-hbg w-full h-screen bg-cover bg-no-repeat bg-center bg-fixed`}>
        <div className="bg-black/30 h-full">
          <Navbar />
          <hr className="lg:mx-[100px] md:mx-[70px] mx-[25px] text-[#fff] h-[0.5px]"/>
          <Header/>
        </div>
        <Cost/>
      </div>

    </main>
  )
}

export default App
