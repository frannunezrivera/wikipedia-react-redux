import React, {Component} from 'react';
import './PageDetail.css'

class PageDetail extends Component {
    render() {
        const {item, handleBookmarkButton, isBookmarked} = this.props;
        const {title, thumbnail, categories, extract} = item;
        return <article className="page-detail">
            <header><h2>{title}</h2>
                <button onClick={handleBookmarkButton}>
                    {isBookmarked ? 'Remove ' : 'Add '} Bookmark
                </button>
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