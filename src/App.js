import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Faq from './components/Faq'
import Blog from './components/Blog'
import Error from './components/Error'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home blogTitle="Kristin's First Post" blogContent="Hello world!"/>
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/faqs">
          <Faq />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
