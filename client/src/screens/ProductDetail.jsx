import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../services/products';
import { addProductToCategory } from '../services/productsCategories';
import React from 'react';




export default function FoodDetail(props) {
  const [productItem, setProductItem] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('')
  const { id } = useParams();
  const { categories } = props;
 

  useEffect(() => {
    const fetchProductItem = async () => {
      const productData = await getOneProduct(id);
      setProductItem(productData);
    }
    fetchProductItem();
  }, [id])

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = await addProductToCategory (selectedCategory, id);
    setProductItem(productData);
  }

  return (
    <div>
      <img src={productItem?.product_img} alt="products"/>
      <h2>{productItem?.name}</h2>
      <h3>{productItem?.product_details}</h3>
      <h2>{productItem?.price}</h2>
     
  
           
  
          
     
      

    </div>
  )
}
