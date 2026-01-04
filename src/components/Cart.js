import React from 'react';

const GST_RATE = 0.18;

const Cart = ({ cartItems, removeFromCart }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gst = subtotal * GST_RATE;
  const total = subtotal + gst;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name} × {item.quantity}</h4>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <hr />
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>GST (18%): ${gst.toFixed(2)}</p>
          <p><strong>Total: ${total.toFixed(2)}</strong></p>
        </>
      )}
    </div>
  );
};

export default Cart;