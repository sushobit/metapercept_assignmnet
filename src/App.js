import logo from './logo.svg';
import './App.css';
import apiData from './components/apidata';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Title</h1>
        <p>Loren ipsum</p>
        <button>Read more</button>
      </div>
      <div>
      <div>
        <ul className='datacontainer'>
          {data.map((each) => (
            <li 
            key={crypto.randomUUID()}>
            <img src={each.ImageUrl} />
            <h3>{each.Name}</h3>
            <p>{each.ShortDesc}</p>
            <button>View</button>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
