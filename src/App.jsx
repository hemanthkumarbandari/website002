import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { QuoteProductsProvider } from './context/QuoteProductsProvider';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <Router>
      <AuthProvider>
        <QuoteProductsProvider>
          <MainLayout />
        </QuoteProductsProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
