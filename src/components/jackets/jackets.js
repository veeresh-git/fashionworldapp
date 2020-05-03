import React from 'react'
import {connect} from 'react-redux'
import './jackets.scss'
import add from '../../redux/action1'


const Jackets=({jackets,addtocart})=> {
    const item=jackets.map(i=>{if(i.id===3)return i.items});
    
         return (
                 item[2].map(i=>
                     <div className="collection-item">
                     <div className="image"
                     style={{
                         backgroundImage:`url(${i.imageUrl})`
                     }}
                     />
                     <div className='collection-footer'>
                     <div><span className='name'>{i.name}</span></div>
                     <div><span className='price'>{i.price}</span></div>
                     <div><button onClick={()=>addtocart(i)}>Buy</button></div>
                     </div>
                  </div>
                  ) 
         )
     }


const mapstatetoprops=(state)=>{
    return{
        jackets:state.SHOP_DATA
    }  
}

const mapdispattoprops=(dispatch)=>{
    return{
      addtocart:(data)=>dispatch(add(data))
    }
  }

export default connect(mapstatetoprops,mapdispattoprops)(Jackets)
