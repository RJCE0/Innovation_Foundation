import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Home } from './pages';
import { opportunityCard } from './components/opportunity-card'

function App() {
  return (
    <Router>
      <Home />
      <opportunityCard
        title='Internship 1'
        desc='Example internship 1'
        date='June 3rd 2021'
        salary='£21 p/w'
        location='London'
      />
    </Router>
  );
}

export default App;
