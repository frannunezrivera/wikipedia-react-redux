import React, {Component} from 'react';
import './Loading.css'

class Loading extends Component {
    render() {
        return <div className="three-bounce">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>;
    }
}

export default Loading;