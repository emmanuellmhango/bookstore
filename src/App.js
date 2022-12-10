import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ListBooks from './components/ListBooks';
import Categories from './pages/Categories';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<ListBooks />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
