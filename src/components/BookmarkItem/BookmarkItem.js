import React, {Component} from 'react';
import {Link} from 'react-router'

class BookmarkItem extends Component {
    render() {
        const {onRemoveButtonClick, item} = this.props;
        const {title, pageid} = item;
        return <li><Link to={"/page/" + pageid}>
            <span>{title}</span>
        </Link>
            <button onClick={onRemoveButtonClick}>Remove bookmark</button>
        </li>;
    }
}

export default BookmarkItem;