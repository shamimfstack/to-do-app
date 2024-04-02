
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TaskBoard from './task/TaskBoard'

function App() {


  return (
    <>
      <Header />
      <div>
        {/* <Hero /> */}
        <TaskBoard />
      </div>
    </>
  )
}

export default App
