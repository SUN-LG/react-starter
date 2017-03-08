import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.css'
import '../../assets/style/core.css'

const CoreLayout = ({children}) => (
  <div className="containers text-center">
    <Header></Header>
    <div className="core-layout__viewport">{children}</div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
