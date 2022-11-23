import './App.css'
import Display from '../Display/Display.js'
import Header from '../Header/Header.js'
import logo from './logo512.png'


function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Display />
    </div>
  );
}

export default App;
