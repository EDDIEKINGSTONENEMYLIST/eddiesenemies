import bg from './ekbg.jpg';
import data from './eddieklist.json'
import Table from './Table';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{
      background:  `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bg})`,
      backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        
    }}>
        <GitHubForkRibbon href="//github.com/nzgamer41/eddiesenemies"
                    target="_blank"
                    position="right">
                    Fork me on GitHub
        </GitHubForkRibbon>
        <p>
          Eddie Kingston's Enemies and Friends:
        </p>
        <br/>
        <Table
        theadData={["Enemies", "Friends"]}
        tbodyData={[data.Enemies, data.Friends]}
      />
      </header>
    </div>
  );
}

export default App;
