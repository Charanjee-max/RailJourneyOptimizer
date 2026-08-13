import './index.css'
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {
  return (
    <div className="app">

      <Navbar />

      <div className="container">
        <SearchForm />
      </div>

    </div>
  )
}

export default App