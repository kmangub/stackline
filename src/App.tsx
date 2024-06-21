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
