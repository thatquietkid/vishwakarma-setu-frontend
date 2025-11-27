import { Routes, Route } from 'react-router-dom';

// Import your pages
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import MachineListingPage from './components/pages/MachineListingPage';
import SearchResultsPage from './components/pages/SearchResultsPage';
import AddListingPage from './components/pages/AddListingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/machines/:id" element={<MachineListingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/sell" element={<AddListingPage />} />
      </Routes>
    </div>
  );
}

export default App;