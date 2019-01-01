import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleProjectModal } from '../common/actions/common'
import ProjectModal from '../components/ProjectModal';

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
)(ProjectModal)