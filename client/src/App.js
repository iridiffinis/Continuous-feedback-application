import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Utility from './Utility';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar></Sidebar>
      <Utility/>
      <div className="Content">
        <p>Content</p>
      </div>
    </div>
  );
}

export default App;
