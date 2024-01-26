import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div className='App'>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
