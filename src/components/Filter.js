import React, { Component } from 'react';

class Filter extends Component {
    render() {
        let className;
        if (this.props.active)
            className = 'Filters__filterBtn--active';
        else
            className = 'Filters__filterBtn';

        return (
            <button className={className} onClick={this.props.onClick}>
                {this.props.filterText}
            </button>
        );
    }
}

export default Filter;