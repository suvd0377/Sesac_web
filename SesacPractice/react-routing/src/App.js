import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Nav from './components/nav';
import Student from './pages/Student';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/student/:name" element={<Student />} />
        <Route path="/student/new" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
