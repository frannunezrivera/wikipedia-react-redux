import React, {Component} from 'react';
import PagesContainer from '../../containers/PagesContainer/PagesContainer';
import Header from '../Header/Header'
import './App.css';

class App extends Component {
    render() {
        const {location, routes} = this.props;
        const {pathname} = location;
        const title = [...routes].pop().title;

        return (
            <div className="App">
                <Header title={title} pathName={pathname}/>
                {this.props.children || <PagesContainer/>}
            </div>
        );
    }
}

export default App;
