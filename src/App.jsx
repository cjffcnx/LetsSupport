import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Topics from './pages/Topics';
import TopicPage from './pages/TopicPage';
import Summary from './pages/Summary';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topic/:id" element={<TopicPage />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;