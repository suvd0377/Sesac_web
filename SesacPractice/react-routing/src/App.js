import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Student from './pages/Student';
import NotFound from './pages/404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />} />
      <Route path="/student/:name" element={<Student />} />
      <Route path="/student/new" element={<Student />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
