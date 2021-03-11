import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../services/products';
import { addProductToCategory } from '../services/productsCategories';
import { Link } from 'react-router-dom';
import React from 'react';




export default function FoodDetail(props) {
  const [productItem, setProductItem] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('')
  const { id } = useParams();
  const { categories } = props;
  const { product, handleDelete, currentUser } = props;

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
     
  
           
  
          
      {/* {productItem?.categories.map((category) => (
        <p key={category.id}>{category.name}</p>
      ))} */}
      {/* <form onSubmit={handleSubmit}>
        <select defaultValue="default" onChange={handleChange}>
          <option value="default" disabled>-- Select a category --</option>
          {categories.map(category => (
            <option value={category.id} key={category.id}>{category.name}</option>
          ))}
        </select>
        <button>add</button>
      </form> */}

    </div>
  )
}
