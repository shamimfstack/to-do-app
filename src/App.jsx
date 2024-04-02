
import './App.css'
import Header from './components/Header'
// import Hero from './components/Hero'
import TaskBoard from './task/TaskBoard'

function App() {


  return (
    <>
      <Header />
      <div>
        {/* hero section */}
        {/* <Hero /> */}

        {/* all task related functionality here */}
        <TaskBoard />
      </div>
    </>
  )
}

export default App
