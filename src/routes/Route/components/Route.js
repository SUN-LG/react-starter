import React, {Component} from 'react'
import { Link, withRouter } from 'react-router'

class Route extends Component {
  constructor(props, context) {
    super(props, context)
    this.redirect = this.redirect.bind(this)
  }

  redirect() {
    this.props.router.push('/hereyougo')
  }

  render() {
    const {location, children} = this.props

    return (
      <div>
        <h1>
          Path: <Link to="/hereyougo">{location.pathname}</Link>
        </h1>
        <div>
          <button onClick={this.redirect}>Go</button>
        </div>
        {children}
      </div>
    )
  }
}

Route.propTypes = {
  location: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired
}

export default withRouter(Route)
