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
  // States for products, loading, error
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Filters state for brand, category, price, rating 
  const [filters, setFilters] = useState({
    brand: "",
    category: "",
    price: "",
    rating: ""
  },);

  // Price and rating arranged in ranges
  const priceRanges: Record<string, (p: Product) => boolean> = {
    "0-50": (p: Product) => p.price <= 50,
    "51-100": (p: Product) => p.price > 50 && p.price <= 100,
    "100+": (p: Product) => p.price > 100
  };

  const ratingRanges: Record<string, (p: Product) => boolean> = {
    "0-2": (p: Product) => p.rating <= 2,
    "2-4": (p: Product) => p.rating > 2 && p.rating <= 4,
    "4-5": (p: Product) => p.rating > 4
  };

  let filterdata = products.filter((product: Product) => {
    return (filters.brand === "" || product.brand === filters.brand) &&
      (filters.category === "" || product.category === filters.category) &&
      (filters.price === "" || priceRanges[filters.price](product)) &&
      (filters.rating === "" || ratingRanges[filters.rating](product));
  });


  // This function is for dynamically filtering options based on current filters  
  const getOptions = (field: keyof Product) => {
    return [
      ...new Set(
        products
          .filter(p => {
            if filters.price && !priceRanges[filters.price](p)){
              return false;
            }
            if(filters.rating && !ratingRanges[filters.rating](p)){
              return false;
            }
            if9filters.brand && field !== "brand" && p.brand !== filters.brand){
              return false;
            }
            if(filter.category && field !== "category" && p.category !== filters.category){
              return false;
            }
            return true;
          })
          .map(p => p[field])
      )
    ];
  };

  //These two functions are for inline editing of product title
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


// Fetch products by handling loading and error states
  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then(setProducts)
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  const fetchProducts = () => {
    return new Promise<Product[]>(async (resolve, reject) => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        // console.log(data.products);
        setTimeout(() => {
          setProducts(data.products);
          resolve(data.products);
        }, 800);
      } catch {
        reject("Failed to load products");
      }
    });
  };

  // This function is for deleting a product
  const deleteProduct = (id: number) => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        setProducts(products.filter(p => p.id !== id));
        resolve();
      }, 400);
    });
  };

  // Initial fetch of products
  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {/*  Filter dropdowns for brand, category, price, rating and reset button */}
      <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
        {["brand", "category"].map(f => (
          <select
            key={f}
            value={filters[f]}
            onChange={e => setFilters({ ...filters, [f]: e.target.value })}
          >
            <option value="">All {f}</option>
            {getOptions(f).map(val => (
              <option key={`${f}-${val}`} value={val}>
                {val}
              </option>
            ))}

          </select>
        ))}
        <select
          value={filters.price}
          onChange={e => setFilters({ ...filters, price: e.target.value })}
        >
          <option value="">All price</option>
          {Object.keys(priceRanges).map(range => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
        <select
          value={filters.rating}
          onChange={e => setFilters({ ...filters, rating: e.target.value })}
        >
          <option value="">All rating</option>
          {Object.keys(ratingRanges).map(range => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>

          {/* Reset filters button to reset the filters */}
        <button onClick={() => setFilters({ brand: "", category: "", price: "", rating: "" })}>
          Reset
        </button>
      </div>
      {/*   The main part of the app displaying the product table */}
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
            {filterdata.map((product) => (
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
                    style={{ width: "100%", border: "none", background: "transparent", textAlign: "center", color: "inherit" }}
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

      {/* Message when no results are found after filtering */}
        {filterdata.length === 0 && (
          <p style={{ marginTop: "15px", color: "red" }}>
            No results found
          </p>
        )}
      </div>
    </>
  )
}

export default App
