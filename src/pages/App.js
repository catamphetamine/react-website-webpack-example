import React from 'react'
import { Link, Loading } from 'react-website'

import 'react-website/components/LoadingIndicator.css'
import 'react-website/components/Loading.css'

import './App.css'

export default ({ children }) => (
  <div>
    {/* Page loading indicator */}
    <Loading/>
    <h1 className="main-title">
    	Increment the counters
    </h1>
    <ul className="main-menu">
      <li> <Link to="/"> Basic </Link> </li>
      <li> <Link to="/advanced"> Advanced </Link> </li>
    </ul>
    <section className="main-content">
    	{ children }
    </section>
  </div>
)