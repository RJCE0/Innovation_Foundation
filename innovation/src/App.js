import './App.css';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom'
import { Home } from './pages';

function App() {
  return (
    <Router>
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
