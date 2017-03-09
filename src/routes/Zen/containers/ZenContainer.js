import {connect} from 'react-redux'
import {fetchZen, clearZen} from '../modules/zen'

import Zen from '../components/Zen'

const mapStateToProps = state => ({
  zen: state.zen
})

const mapDispatchToProps = {
  fetchZen,
  clearZen
}

export default connect(mapStateToProps, mapDispatchToProps)(Zen)
