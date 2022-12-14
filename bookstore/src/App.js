import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Books from './pages/Books';
import Categories from './pages/Categories';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
