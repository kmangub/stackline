import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectProducts, selectLoading, selectError } from './features/dataSlice';
import { AppDispatch } from './app/store';

const DataComponent: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const products = useSelector(selectProducts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
  
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div>
        <h1>Products</h1>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.subtitle}</p>
            <p>Brand: {product.brand}</p>
            <p>Retailer: {product.retailer}</p>
            <h3>Details:</h3>
            <ul>
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <h3>Tags:</h3>
            <ul>
              {product.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
            <h3>Reviews:</h3>
            <ul>
              {product.reviews.map((review, index) => (
                <li key={index}>
                  <strong>{review.customer}</strong>: {review.review} (Score: {review.score})
                </li>
              ))}
            </ul>
            <h3>Sales:</h3>
            <ul>
              {product.sales.map((sale, index) => (
                <li key={index}>
                  Week Ending: {sale.weekEnding}, Retail Sales: {sale.retailSales}, Wholesale Sales: {sale.wholesaleSales}, Units Sold: {sale.unitsSold}, Retailer Margin: {sale.retailerMargin}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default DataComponent;