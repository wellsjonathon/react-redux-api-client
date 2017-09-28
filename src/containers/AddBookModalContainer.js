import { connect } from 'react-redux';
import { toggleModal } from './../utils/Actions';
import AddBookModal from './../components/AddBookModal';

const mapStateToProps = state => {
    return {
        showModal: state.showModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCancel: () => {
            dispatch(toggleModal())
        }
    }
}

const AddBookModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddBookModal)

export default AddBookModalContainer;