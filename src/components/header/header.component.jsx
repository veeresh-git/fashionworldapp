import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.style.scss';
import {auth} from '../../firebase/firebase.utils';

const Header=({currentuser})=>(
    <div className="header">
    <Link className="logo-container" to='/'>
    <Logo className="logo"/>
    </Link>
    <div className='options'>
    {
        currentuser?
        <div>{currentuser.displayName}</div>
        :
        <div></div>
    }
    </div>
    <div className='options'>
    <Link className='option' to='/shop'>
    SHOP
    </Link>
    <Link className='option' to='/contact'>
    CONTACT
    </Link>
    <Link className='option' to='/cart'>
    CART
    </Link>
    {
        currentuser?
        <Link className='option' onClick={()=>auth.signOut()}>SIGNOUT</Link>
        :
        <Link to='/signin' className='option'>SIGNIN</Link>
    }
    </div>
    </div>
)
export default Header;