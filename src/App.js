import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <Header />
        <Home blogTitle="Kristin's First Post" blogContent="Hello world!"/>
      <Footer />
    </div>
  );
}

export default App;
