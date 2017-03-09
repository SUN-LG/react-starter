import React, {Component} from 'react'
import Spinner from 'react-spinkit'
import './Zen.css'

class Zen extends Component {
  render() {
    const {fetchZen, clearZen, zen: {fetching, text}} = this.props

    return (
      <div>
        <div className="loading">
          {fetching ? <Spinner spinnerName='double-bounce' /> : ''}
        </div>
        <div>
          <button className="btn btn-default" onClick={fetchZen}>
            {fetching ? 'Fetching...' : 'Fetch'}
          </button>
          <button className="btn btn-default" onClick={clearZen}>
            Clear
          </button>
        </div>
        <div>
          {
            text.map(item => (<h2 key={item.id}>{item.text}</h2>))
          }
        </div>
      </div>
    )
  }
}

Zen.propTypes = {
  zen: React.PropTypes.object.isRequired
}

export default Zen
