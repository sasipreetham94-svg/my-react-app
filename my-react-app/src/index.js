import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function App() {
return (
<div className="App">
<header className="App-header">
<nav style={{ backgroundColor: '#333', padding: '10px',
color: 'white' }}>
<a href="#" style={{ color: 'white', margin: '0 10px'
}}>Home</a>
<a href="#" style={{ color: 'white', margin: '0 10px'
}}>About</a>
<a href="#" style={{ color: 'white', margin: '0 10px'
}}>Contact</a>
</nav>
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
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
