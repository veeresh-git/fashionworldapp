import React, { Component } from 'react'
import './homepage.style.scss'
import Directorymenu from '../../components/directory/directory-menu.component';

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Directorymenu/>
      </div>
    )
  }
}

