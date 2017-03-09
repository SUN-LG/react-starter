import {connect} from 'react-redux'
import {plus} from '../modules/elapse'

import Elapse from '../components/Elapse'

const mapStateToProps = state => ({
  elapse: state.elapse
})

const mapDispatchToProps = {
  plus
}

export default connect(mapStateToProps, mapDispatchToProps)(Elapse)
