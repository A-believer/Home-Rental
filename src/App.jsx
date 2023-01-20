import Navbar from "./components/Navbar"
import Header from "./containers/Header"

function App() {
 

  return (
    <main>
      <div className={`bg-hbg w-full h-screen bg-cover bg-no-repeat bg-center`}>
        <div className="bg-black/30 h-full">
          <Navbar />
          <hr className="lg:mx-[120px] mx-[25px] text-[#fff] h-[0.5px]"/>
          <Header/>
        </div>
      </div>

    </main>
  )
}

export default App
