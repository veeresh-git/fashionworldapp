import React from 'react'
import './menueitem.component.scss'
import {Link} from 'react-router-dom';

const Menueitem=({title,imageUrl,size,linkUrl})=> (
             <div style={
                 {
                     backgroundImage:`url(${imageUrl})`
                 }
             }
             className={`${size} menu-item`} >
             <Link to={`${linkUrl}`} className="home">
                <div className="content">
                   <h1  className="title">{title.toUpperCase()}</h1>
                   <span>SHOP NOW</span>
                </div>
            </Link>
             </div>
)
export default Menueitem;