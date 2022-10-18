import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Blogs from './components/Blogs';

function App() {
  const [click,setClick] = useState(0);
  return (
    <div>
    <Header />
    <Blogs />
    <p>You have clicked {click} times!
    <button onClick={() => setClick(click+1)}>
      Click Me
    </button>
    </p>
    </div>
  );
}

export default App;
