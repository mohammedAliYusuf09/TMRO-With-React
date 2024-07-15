import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'
import TodoDailySrote from './store'

function App() {

  return (
    <TodoDailySrote>
      <Header/>
      <Hero/>
    </TodoDailySrote>
  )
}

export default App
