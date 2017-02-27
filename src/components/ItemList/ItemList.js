import React, {Component} from 'react';

class ItemList extends Component {
    render() {
        const {children} = this.props;
        return (<div className="item-list">
            <ul>{children}</ul>
        </div>);
    }
}

export default ItemList;