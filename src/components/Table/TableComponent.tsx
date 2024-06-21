import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../features/dataSlice';
import { Product, Sale } from '../../types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './TableComponent.css';

interface TableComponentProps {
  className?: string;
}

const TableComponent: React.FC<TableComponentProps> = ({ className }) => {
  const products: Product[] = useSelector(selectProducts);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  return (
    <TableContainer component={Paper} className={className}>
      <Table sx={{ minWidth: 650 }} aria-label="product sales table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'black', textTransform: 'uppercase', fontFamily: 'Julius Sans One, sans-serif' }}>
              Week Ending
            </TableCell>
            <TableCell align="right" sx={{ color: 'black', textTransform: 'uppercase', fontFamily: 'Julius Sans One, sans-serif' }}>
              Retail Sales
            </TableCell>
            <TableCell align="right" sx={{ color: 'black', textTransform: 'uppercase', fontFamily: 'Julius Sans One, sans-serif' }}>
              Wholesale Sales
            </TableCell>
            <TableCell align="right" sx={{ color: 'black', textTransform: 'uppercase', fontFamily: 'Julius Sans One, sans-serif' }}>
              Units Sold
            </TableCell>
            <TableCell align="right" sx={{ color: 'black', textTransform: 'uppercase', fontFamily: 'Julius Sans One, sans-serif' }}>
              Retailer Margin
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product: Product) => (
            product.sales.map((sale: Sale, index: number) => (
              <TableRow 
                key={`${product.id}-${index}`} 
                sx={{ 
                  '&:last-child td, &:last-child th': { border: 0 },
                  borderBottom: '1px solid lightgray'
                }}
              >
                <TableCell component="th" scope="row" sx={{ color: 'gray' }}>
                  {sale.weekEnding}
                </TableCell>
                <TableCell align="right" sx={{ color: 'gray' }}>{formatCurrency(sale.retailSales)}</TableCell>
                <TableCell align="right" sx={{ color: 'gray' }}>{formatCurrency(sale.wholesaleSales)}</TableCell>
                <TableCell align="right" sx={{ color: 'gray' }}>{sale.unitsSold.toLocaleString()}</TableCell>
                <TableCell align="right" sx={{ color: 'gray' }}>{formatCurrency(sale.retailerMargin)}</TableCell>
              </TableRow>
            ))
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
