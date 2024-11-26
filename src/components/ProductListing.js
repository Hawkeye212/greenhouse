  import React from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { addItem } from '../redux/cartSlice';
  
  const products = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 15.99, category: 'Indoor', img: '/images/houseplant1.jpg' },
    { id: 2, name: 'Snake Plant', price: 9.99, category: 'Indoor', img: '/images/houseplant2.jpg' },
    { id: 3, name: 'Fern', price: 12.49, category: 'Outdoor', img: '/images/houseplant3.jpg' },
    { id: 4, name: 'Peace Lily', price: 20.0, category: 'Outdoor', img: '/images/houseplant4.jpg' },
    { id: 5, name: 'Jade Plant', price: 5.99, category: 'Succulents', img: '/images/houseplant5.jpg' },
    { id: 6, name: 'Aloe Vera', price: 8.49, category: 'Succulents', img: '/images/houseplant6.jpg' },
  ];
  
  function ProductListing() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
  
    return (
      <div className="product-listing">
        <h2>Our Plants</h2>
        {['Indoor', 'Outdoor', 'Succulents'].map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <div className="products">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div className="product" key={product.id}>
                    <img src={product.img} alt={product.name} />
                    <p>{product.name}</p>
                    <p>${product.price.toFixed(2)}</p>
                    <button
                      disabled={cart.some((item) => item.id === product.id)}
                      onClick={() => dispatch(addItem(product))}
                    >
                      {cart.some((item) => item.id === product.id) ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductListing;
  
