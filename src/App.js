import './App.css';
import AppProvider from './context/AppProvider';
import Router from './router/Router';

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
