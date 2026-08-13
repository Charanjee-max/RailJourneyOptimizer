import Navbar from '../components/Navbar'
import SearchForm from '../components/SearchForm'

function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <SearchForm />
      </div>
    </>
  )
}

export default Home