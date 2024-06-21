<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './features/dataSlice';
import ProductPane from './ProductPane';
import TableComponent from './TableComponent';
import Header from './Header';
import { AppDispatch } from './app/store';
import './App.css';

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div >
      <Header />
      <div className="wrapper-container">
      <ProductPane className ="product-pane"/> <TableComponent className="table-container"/>
      </div>
    </div>
  );
};

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 90047f7 (Changing template from JavaScript to TypeScript)
