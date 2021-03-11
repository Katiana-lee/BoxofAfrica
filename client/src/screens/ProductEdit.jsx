import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductEdit(props) {
  const [formData, setFormData] = useState({
      name: '',
      product_img: '',
      product_details: '',
      price: '',
  });
  
    const { name, product_img, product_details, price } = formData;
  const { products, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const productItem = products.find((product) => product.id === Number(id));
      setFormData({
        name: productItem.name,
        product_img: productItem.product_img,
        product_details: productItem.product_details,
        price: productItem.price

      });
    }
    if (products.length) {
      prefillFormData();
    }
  }, [products, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
       <h3>Create Edit</h3>
      <label className="label" >Name: </label>
        <input
          type='text'
          name='name'
          placeholder='Enter Name'
          value={name}
          onChange={handleChange}
        />

      <label className="label" >Image: </label>
      <input
          type='text'
          name='product_img'
          placeholder='Enter Image URL'
          value={product_img}
          onChange={handleChange}
      />

      <label className="label" >Description: </label>
       <textarea
          type='text'
        name='product_details'
        cols='30'
        rows='10'
          placeholder='Descrription'
          value={product_details}
          onChange={handleChange}
      />
      
      <label className="label" >Price: </label>
      <input
          type='number'
          name='price'
          placeholder='Price'
          value={price}
          onChange={handleChange}
      />
      <br />
      <button>Submit</button>
    </form>
  )
}
