import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Scripts from './components/Scripts'
function App() {
  return(
    <Routes>
      <Route path="/" element = {<Layout />}>
        <Route index element = {<Home />} />
        <Route path="scripts" element = {<Scripts />} />
      </Route>
    </Routes>



  );


}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
