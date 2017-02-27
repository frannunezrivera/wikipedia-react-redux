import React, {Component} from 'react';
import ItemList from '../ItemList/ItemList'

class PageList extends Component {
    render() {
        const {children, onGetMorePagesClicked} = this.props;
        return (<div className="page-list">
            <ItemList children={children}/>
            <button
                onClick={onGetMorePagesClicked}>
                Give me more Pages!
            </button>
        </div>);
    }
}

export default PageList;