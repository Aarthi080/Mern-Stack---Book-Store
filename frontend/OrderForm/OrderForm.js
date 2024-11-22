import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [cartItems, setCartItems] = useState([
    { productId: '', qty: 1, product: {} },
  ]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchProductDetails = async (productId, index) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/products/${productId}`);
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].product = response.data.product;
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error('Error fetching product details:', error);
      setMessage('Failed to load product details.');
    }
  };

  const handleAddItem = () => {
    setCartItems([...cartItems, { productId: '', qty: 1, product: {} }]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCartItems = [...cartItems];
    updatedCartItems[index][name] = value;

    if (name === 'productId' && value) {
      fetchProductDetails(value, index);
    }

    setCartItems(updatedCartItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:8000/api/v1/order', cartItems);
      if (response.data.success) {
        setMessage('Order placed successfully!');
        setCartItems([{ productId: '', qty: 1, product: {} }]);
      }
    } catch (error) {
      setMessage('Error placing order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1>Order your Books</h1>
        {message && <p>{message}</p>}

        <form onSubmit={handleSubmit}>
          {cartItems.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <div>
                <label htmlFor={`productId-${index}`}>Product</label>
                <input
                  type="text"
                  id={`productId-${index}`}
                  name="productId"
                  value={item.productId}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Enter Product ID"
                  required
                  style={styles.input}
                />
              </div>

              {item.product._id && (
                <div style={styles.productDetails}>
                  <h3>{item.product.name}</h3>
                  <p>{item.product.description}</p>
                  <p>Price: ${item.product.price}</p>
                  <p>In Stock: {item.product.stock}</p>
                </div>
              )}

              <div>
                <label htmlFor={`qty-${index}`}>Quantity</label>
                <input
                  type="number"
                  id={`qty-${index}`}
                  name="qty"
                  value={item.qty}
                  onChange={(e) => handleChange(index, e)}
                  min="1"
                  max={item.product.stock}
                  required
                  style={styles.input}
                />
              </div>
            </div>
          ))}

          <div>
            <button type="button" onClick={handleAddItem} style={styles.button}>
              Add Another Product
            </button>
          </div>

          <div>
            <button type="submit" disabled={loading} style={styles.button}>
              {loading ? 'Submitting...' : 'Place Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// CSS styles using inline styling
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  formWrapper: {
    width: '100%',
    maxWidth: '600px',
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  cartItem: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '10px 0',
  },
  productDetails: {
    margin: '10px 0',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
  },
};

export default OrderForm;
