import React from "react";
import './props.css';

function Product(props) {
  return (

<div className="column">
  <div className="card">
      <h3>{props.nama}</h3>
      <p>Rp. {props.harga}</p>
      <button>Pesan</button>
    </div>
</div>
    
  
        
  );
}

export default Product;