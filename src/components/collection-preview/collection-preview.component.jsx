import React from 'react'
import Collectionitem from '../collection-item/collection-item.component'
import './collectio-preview.style.scss'
import { Link } from 'react-router-dom';
//import {withRouter} from 'react-router-dom';

 const CollectionPreview=({title,items,routeName})=>(
     
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
      {
          items.filter((item,idx)=>(idx<4)).map(({id, ...otherprops})=>(
              <Collectionitem key={id} {...otherprops} />
          )
          )
      }
     <Link to={`${routeName}`} className="more"><h5>click here for more {title} and buy</h5></Link>
      </div>
    </div>
)
export default CollectionPreview; 