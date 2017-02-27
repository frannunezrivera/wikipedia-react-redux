import React, {Component} from 'react';

class PageDetail extends Component {
    render() {
        const {item} = this.props;
        const {title, thumbnail, categories, extract} = item;
        return <article>
            <header><h2>{title}</h2>
            </header>
            <section>
                {thumbnail ?
                    <img src={thumbnail.source} alt="main" width={thumbnail.width} height={thumbnail.height}/> : '' }
                <p>
                    {extract}
                </p>
                <ul>
                    {categories.map((category, i) => {
                        return <li key={i}>{category.title.replace('Category:', '')}</li>;
                    })}
                </ul>
            </section>
        </article>;
    }
}

export default PageDetail;