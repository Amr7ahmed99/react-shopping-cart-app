import './App.css';
import Footer from './components/Local/footer/Footer';
import Header from './components/Local/header/Header';
import Main from './components/Local/main/Main';

function App() {
  return (
    <div className="layout">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
