import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Sheet1Page from './pages/Sheet1Page';
import Sheet2Page from './pages/Sheet2Page';
import Sheet3Page from './pages/Sheet3Page';
import Sheet4Page from './pages/Sheet4Page';
import Sheet5Page from './pages/Sheet5Page';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="sheet1" element={<Sheet1Page />} />
          <Route path="sheet2" element={<Sheet2Page />} />
          <Route path="sheet3" element={<Sheet3Page />} />
          <Route path="sheet4" element={<Sheet4Page />} />
          <Route path="sheet5" element={<Sheet5Page />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;