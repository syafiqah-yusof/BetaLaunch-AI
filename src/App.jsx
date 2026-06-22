import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import SubmitPage from './pages/SubmitPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/submit" element={<SubmitPage />} />
    </Routes>
  );
}