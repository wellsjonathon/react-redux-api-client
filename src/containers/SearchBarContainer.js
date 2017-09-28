import { connect } from 'react-redux';
import { searchBookList } from './../utils/Actions';
import SearchBar from './../components/SearchBar';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        search: query => {
            dispatch(searchBookList(query))
        }
    }
}

const SearchBarContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)

export default SearchBarContainer;