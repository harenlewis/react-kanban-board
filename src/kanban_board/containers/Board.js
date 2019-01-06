import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleProjectModal } from '../actions'
import Board from '../components/Board';

const mapStateToProps = (state) => {
    return {
        showProjectModal: state.kanban.toggelProjectModal,
        stages: state.kanban.stages,
        stagesById: state.kanban.stagesById
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleProjectModal }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)