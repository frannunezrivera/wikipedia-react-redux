import React, {Component} from 'react';
import {Link} from 'react-router'

import './Header.css'

class Header extends Component {
    render() {
        const links = [
            {to: '/', text: 'Pages'},
            {to: '/bookmarks', text: 'Bookmarks'}
        ];

        const {title, pathName} = this.props;
        return <header>
            <h1>{title}</h1>
            <nav>
                {
                    links.map((link, i) => {
                        let linkClass = (pathName === link.to) ?
                            'link disabled-link' : 'link active-link';
                        return (
                            <Link key={i} className={linkClass} to={link.to}>
                                <span className='link-text'>{link.text}</span>
                            </Link>
                        )
                    })
                }
            </nav>
        </header>;
    }
}

export default Header;