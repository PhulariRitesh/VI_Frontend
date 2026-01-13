import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      return new Promise(async (resolve) => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        setTimeout(() => resolve(data), 1000);
      }).then((data: any) => {
        console.log(data);
        setProducts(data.products);
      });
    }

    fetchProducts();
  },[]);

  if (products.length === 0) {
    return <div>Loading...</div>; 
  }
  return (
    <>
      <div>
      <table>
      <thead>
        <tr>
        <th>Title</th>
        <th>Brand</th>
        <th>Category</th>
        <th>Price</th>
        <th>Rating</th>
      </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.brand}</td>
          <td>{product.category}</td>
          <td>{product.price}</td>
          <td>{product.rating}</td>
        </tr>
        ))
      }
      </tbody>
      </table>

      </div>
        </>
  )
}

export default App
