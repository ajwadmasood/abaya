import React from 'react'
import abayas from '../../data'
import './Products.css'

const Products = () => {
  return (
    <div style={{margin:'50px'}}>{abayas.map((abaya)=>{
        return <div className='container'>
            <img src={abaya.image} alt="" />
            <h4>{abaya.title}</h4>
            <p><span style={{color:'gray', textDecoration: 'line-through'}}>£{abaya.was}</span><span style={{fontWeight:'700'}}>£{abaya.now}</span><span style={{color:'green', fontWeight:'700'}}>{abaya.off}% off</span></p>
        </div>
    })}</div>
  )
}

export default Products