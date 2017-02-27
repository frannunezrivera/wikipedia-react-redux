import React, {Component} from 'react';
import {Link} from 'react-router'

class Item extends Component {
    render() {
        const {title, pageid} = this.props.item;
        return <li><Link to={"/page/" + pageid}>
            <span>{title}</span>
        </Link></li>;
    }
}

export default Item;