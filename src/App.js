import React, { Component } from 'react'
import Homepage from './pages/homepage/homepage.component'
import {Switch,Route} from 'react-router-dom';
import Shop from './pages/shop/shop.component'
import './App.css'
import Header from './components/header/header.component'
import Signinpage from './pages/signin/signin'
import { auth } from './firebase/firebase.utils'
import Hats from './components/hatsitems/hats.component'
import Sneakers from './components/sneakers/sneaker.component'
import Jackets from './components/jackets/jackets'
import Women from './components/women/women'
import Mens from './components/mens/mens.component'
import Cart from './components/cart/cart.component'
import Contact from './components/contact'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      currentuser:null
    }
  }

  unsubscribefromauth = null;

  componentDidMount(){
    this.unsubscribefromauth = auth.onAuthStateChanged(user=>{
       this.setState({currentuser:user})
       console.log(this.state.currentuser)
     })
  } 
  
  componentWillUnmount(){
    this.unsubscribefromauth();
  }

  render() {
    return (
      <div>
      <Header currentuser={this.state.currentuser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin' component={Signinpage} />
          <Route exact path='/hats' component={Hats} />
          <Route exact path='/sneakers' component={Sneakers} />
          <Route exact path='/jackets' component={Jackets} />
          <Route exact path='/womens' component={Women} />
          <Route exact path='/mens' component={Mens} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    )
  }
}
