import { connect } from 'react-redux';
import { toggleModal } from './../utils/Actions';
import AddBookBtn from './../components/AddBookBtn';

const mapStateToProps = state => {
    return {
        showModal: state.showModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            dispatch(toggleModal())
        }
    }
}

const AddBookBtnContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddBookBtn)

export default AddBookBtnContainer;