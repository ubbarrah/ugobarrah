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

export default App;
