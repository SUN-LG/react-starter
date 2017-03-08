import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.css'

export const Header = () => (
  <div>
    <h1>React starter kit</h1>
    <IndexLink to="/" activeClassName="route--active">Home</IndexLink>
    {' . '}
    <Link to="/counter" activeClassName="route--active">Counter</Link>
    {' . '}
    <Link to="/zen" activeClassName="route--active">zen</Link>
    {' . '}
    <Link to="/elapse" activeClassName="route--active">elapse</Link>
    {' . '}
    <Link to="/route/88" activeClassName="route--active">route</Link>
    {' . '}
    <Link to="/notFound" activeClassName="route--active">404</Link>
  </div>
)

export default Header
