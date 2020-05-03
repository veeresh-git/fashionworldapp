import React from 'react'
import './collection-item.style.scss'

const Collectionitem=({id,name,price,imageUrl})=>(
        <div className='collection-item'>
           <dev className="image"
           style={{
               backgroundImage:`url(${imageUrl})`
           }}
           />
        </div>
)
export default Collectionitem;