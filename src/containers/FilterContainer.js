import { connect } from 'react-redux';
import { setFilter } from './../utils/Actions';
import Filter from './../components/Filter';

// Props available to <FilterContainer/>
// 'componentProps' are props from the <FilterContainer/> object declaration 
//    (eg: <FilterContainer filter={FILTER_ALL}/>)
const mapStateToProps = (state, componentProps) => {
    return {
        active: componentProps.filter === state.filter,
        filterText: componentProps.filterText
    }
}

// Functions available to <FilterContainer/>
const mapDispatchToProps = (dispatch, componentProps) => {
    return {
        // onClick() function call will trigger setFilter action creator 
        // with the <FilterContainer/> components' local filter prop,
        // which is then dispatched through the reducers to act on the store
        onClick: () => {
            dispatch(setFilter(componentProps.filter))
        }
    }
}

// Tie <FilterContainer/> with props and functions to <Filter/> display component
const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)

export default FilterContainer;