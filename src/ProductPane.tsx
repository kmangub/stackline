import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { Product } from './types';
import './ProductPane.css';


interface ProductPaneProps {
    className: string;
}
  
  const ProductPane: React.FC<ProductPaneProps> = () => {
    const products: Product[] = useSelector((state: RootState) => state.data.products);
  
    return (
      <div>
        {products.map((product) => (
          <div key={product.id} className="product-pane">
            <img src={product.image} alt="Product" className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-subtitle">{product.subtitle}</p>
            <div className="product-tags">
              {product.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductPane;