import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { } from '../actions'
import Stage from '../components/Stage';

const mapStateToProps = (state) => {
    return {
        projectsById: state.kanban.projectsById,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Stage)