import React, { Component } from 'react'
import './cart.scss';
import {connect} from 'react-redux'
import add from '../../redux/action1'
import remove from '../../redux/action2'

class Cart extends Component {
    render() {
        return (
            <div>{
                this.props.cart.map(i=>
                    <div className="collection-item">
                    <div className="image"
                    style={{
                        backgroundImage:`url(${i.imageUrl})`
                    }}
                    />
                    <div className='collection-footer'>
                    <span className='name'>{i.name}</span>
                    <span className='price'>{i.price}</span>
                    </div>
                    <div>
                    <button onClick={()=>this.props.addtocart(i)}>+</button>
                    <span>Units{i.unit}</span>
                    <button onClick={()=>this.props.remove(i)}>-</button> 
                    </div>
                 </div>
                 ) 
            }
            <div><h6>total amount payable is</h6>{this.props.total}</div>
            </div>
        )
    }
}
const mapstatetoprops=(state)=>{
    return{
        cart:state.CART_DATA,
        total:state.total
    }  
}
const mapdispattoprops=(dispatch)=>{
    return{
      addtocart:(data)=>dispatch(add(data)),
      remove:(data)=>dispatch(remove(data))
    }
  }
export default connect(mapstatetoprops,mapdispattoprops)(Cart)
