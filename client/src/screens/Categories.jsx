import React from 'react';
import { Link } from 'react-router-dom';



export default function Categories(props) {
  const { categories } = props;

 

  return (
    <div>
      <h3>Categories</h3>
      {categories.map((category) => (
       <React.Fragment key={category.id}>
       <Link to={`/categories/${category.id}`}><p>{category.name}</p></Link>
       
     </React.Fragment>
      ))}
    </div>
  )
}
