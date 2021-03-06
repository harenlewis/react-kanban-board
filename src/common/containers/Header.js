import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/Header'
import { toggleProjectModal } from '../../kanban_board/actions/'

const mapStateToProps = (state) => {
    return {
        showProjectModal: state.kanban.toggelProjectModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleProjectModal }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)