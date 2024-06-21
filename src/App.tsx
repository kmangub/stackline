import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './features/dataSlice';
import ProductPane from './components/ProductPane/ProductPane';
import TableComponent from './components/Table/TableComponent';
import Header from './components/Header/Header';
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
