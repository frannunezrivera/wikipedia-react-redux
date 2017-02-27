import React, {Component} from 'react';

class Item extends Component {
    render() {
        const {title} = this.props.item;
        return <li><span>{title}</span></li>;
    }
}

export default Item;