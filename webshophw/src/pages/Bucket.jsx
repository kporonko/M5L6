import React from 'react'

export default function Bucket({bucketProducts}) {
  const price = bucketProducts.reduce((acc, product) => acc + product.price, 0)
  return (
    <div>
      <h1 className='center'>Bucket</h1>
      <h1  className='center' style={{'font-size': '20px', 'margin': '20px 0'}}>Overall Price: {price}$</h1>
      {bucketProducts.length > 0 ? bucketProducts.map(product => (
      <div className='cart-item'>
        <img src={product.image}/>
        <div className='cart-desc'>
            <h2>{product.title}</h2>
            <h4>{product.description}</h4>
            <b>{product.price}$</b>
        </div>
      </div>
    )) : <div>Cart is empty</div>}
    </div>
  )
}
