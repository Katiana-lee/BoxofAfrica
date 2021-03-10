import { useState } from 'react';

export default function FoodCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
    product_img: '',
    product_details: '',
    price: '',
  });
  const { name, product_img, product_details, price } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Create Product</h3>
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
