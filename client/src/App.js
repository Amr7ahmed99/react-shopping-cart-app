import './App.css';
import Footer from './components/Local/footer/Footer';
import Header from './components/Local/header/Header';
import Main from './components/Local/main/Main';
import { Provider } from 'react-redux';
import store from './store/store'; 
function App() {
  return (
    <Provider store= {store}>
      <div className="layout">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </Provider>

  );
}

export default App;
