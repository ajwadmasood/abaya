import React from 'react'
import abayas from '../data'
import './Pages.css'

const Men = () => {
    const menAbayas = abayas.filter(abaya => abaya.gender === 'men');
    return (
        <div style={{margin:'50px'}}>{menAbayas.map((abaya)=>{
            return <div className='container'>
                <img src={abaya.image} alt="" />
                <h4>{abaya.title}</h4>
                <p><span style={{color:'gray', textDecoration: 'line-through'}}>£{abaya.was}</span><span style={{fontWeight:'700'}}>£{abaya.now}</span><span style={{color:'green', fontWeight:'700'}}>{abaya.off}% off</span></p>
            </div>
        })}</div>
      )
}

export default Men