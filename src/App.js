import logo from './logo.svg';
import './App.css';
import ServerDataSource from './api'

async function App() {
  let abc = new ServerDataSource();
  let res = await abc.getAccountOpenSea("0xD59134a3E004609f39C601cE6F0739df2cc78240");
  console.log("abc");
  console.log(res);
  console.log("bcd")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
