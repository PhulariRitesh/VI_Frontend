import { useEffect, useState } from 'react'
import './App.css'
  type Product = {
  id: number;
  title: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

const handleTitleEdit = async (id, value) => {
  if (!value.trim()) return;
  await updateProductTitle(id, value);
};

const updateProductTitle = (id: number, title: string) => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      setProducts(products.map(p =>
        p.id === id ? { ...p, title } : p
      ));
      setProducts([...products]);
      resolve();
    }, 400);
  });
};


const fetchProducts = () => {
  return new Promise<Product[]>(async (resolve, reject) => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data.products);
      setTimeout(() => {
        setProducts(data.products);
        resolve(data.products);
      }, 800);
    } catch {
      reject("Failed to load products");
    }
  });
};

const deleteProduct = (id: number) => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      setProducts(products.filter(p => p.id !== id));
      resolve();
    }, 400);
  });
};

useEffect(() => {
  fetchProducts().then(setProducts);
}, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;

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
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
          <td>
  <input
    value={product.title}
    onChange={e =>
      setProducts(prev =>
        prev.map(p =>
          p.id === product.id ? { ...p, title: e.target.value } : p
        )
      )
    }
    onBlur={() => updateProductTitle(product.id, product.title)}
    style={{ width: "100%", border: "none", background: "transparent", textAlign: "center",color: "inherit" }}
  />
</td>
          <td>{product.brand}</td>
          <td>{product.category}</td>
          <td>{product.price}</td>
          <td>{product.rating}</td>
                    <td>
  <button
    onClick={() => deleteProduct(product.id)}
    style={{ color: "red", cursor: "pointer" }}
  >
    Delete
  </button>
</td>
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
