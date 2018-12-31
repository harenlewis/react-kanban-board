import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/Header'
import { toggleProjectModal } from '../actions/common'

const mapStateToProps = (state) => {
    return {
        showProjectModal: state.common.toggelProjectModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleProjectModal }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)