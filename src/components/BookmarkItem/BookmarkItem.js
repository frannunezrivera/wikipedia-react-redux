import React, {Component} from 'react';
import {Link} from 'react-router'

class BookmarkItem extends Component {
    render() {
        const {onRemoveButtonClick, item} = this.props;
        const {title, pageid} = item;
        return <li><div><Link to={"/page/" + pageid}>
            <span>{title}</span>
        </Link>
            <button onClick={onRemoveButtonClick}>Remove bookmark</button>
        </div></li>;
    }
}

export default BookmarkItem;