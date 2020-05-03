import React, { Component } from 'react'
import './shop.style.scss'
//import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import {connect} from 'react-redux';

 class Shop extends Component {
    constructor(props){
        super(props);
        this.state={
            collections:this.props.shopdata
        }
    }
    render() {
        return (
            <div className="shop-page">
               {
                   this.state.collections.map(({id, ...otherprops })=>(
                       <CollectionPreview key={id} {...otherprops}/>
                   ))
               }
            </div>
        )
    }
}

const mapstatetoprops=(state)=>{
    return{
        shopdata:state.SHOP_DATA
    }
}
export default connect(mapstatetoprops)(Shop);