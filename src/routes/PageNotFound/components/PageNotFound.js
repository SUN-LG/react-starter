import React, {Component} from 'react'
import styles from './PageNotFound.css'
import NotFoundImage from '../assets/404.jpg'
import {withRouter} from 'react-router'

class PageNotFound extends Component {
  render() {
    const {router} = this.props
    return (
      <div className={styles.container}>
        <h1>Page not found!!!</h1>
        <h3>
          <a className={styles.link} onClick={router.goBack}></a>
        </h3>
        <img src={NotFoundImage} alt="page not found"/>
      </div>
    )
  }
}

PageNotFound.propTypes = {
  router: React.PropTypes.object.isRequired
}

export default withRouter(PageNotFound)
