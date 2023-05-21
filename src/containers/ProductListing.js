import React, { useEffect, useCallback, useMemo } from 'react';
import axios from 'axios'; //
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/action/productActions';
import ProductComponent from './ProductComponent';

const ProductPage = () => {
  const products = useSelector(state => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch(err => {
        console.log('Err: ', err);
      });
    console.log(response.data);
    dispatch(setProducts(response.data)); // sending the data to the state and updating the state
  };
  //const [state, setState] = React.useState(0);
  useEffect(() => {
    console.log('hree');
    fetchProducts();

    //setState(2);

    //console.log(state);
    //setState(3);
  }, []);

  console.log('Products :', products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
