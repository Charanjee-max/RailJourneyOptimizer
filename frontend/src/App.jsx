import './index.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">

      <Navbar />

      <div className="container">

        <div className="search-card">

          <h1>Emergency Railway Journey Assistant</h1>

          <p>
            Search journey after chart preparation
          </p>

          <input type="text" placeholder="Train Number" />

          <input type="text" placeholder="Boarding Station" />

          <input type="text" placeholder="Destination Station" />

          <input type="date" />

          <select>
            <option>2A</option>
            <option>3A</option>
            <option>SL</option>
          </select>

          <div className="checkbox">
            <input type="checkbox" />
            <label>Allow Mixed Class</label>
          </div>

          <button>Analyze Journey</button>

        </div>

      </div>

    </div>
  )
}

export default App