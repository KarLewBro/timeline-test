import './App.css';
import * as Comp from './components/index.js';
import * as Wiks from './modules/Wiks.js';


const folks = [//Test stand in
  {
    name: "Althea Zimmerman",
    birth: "1917",
    death: "1969",
    color: "background-color: #123456;"
  },
  {
    name: "Beatrice Yelovich",
    birth: "1933",
    death: "1978",
    color: "background-color: #345612;"
  },
  {
    name: "Claire Xavier",
    birth: "1965",
    death: "2021",
    color: "background-color: #561234;"
  }
];



function App() {
  let { birth, death } = { birth: 1991, death: null };//Test stand in
  console.log(birth, death)
  return (
    <div className="App">
      <div className="App-container">
        <Comp.Header />
        <div className="Span-container">
          <div className="Span">Base Timeline:  {birth}-{death ?? 'Present'}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
