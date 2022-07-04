import './App.css';
import Header from './components/Local/header/Header';
import Main from './components/Local/main/Main';

function App() {
  return (
    <div className="layout">
      <Header/>
      <Main/>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
