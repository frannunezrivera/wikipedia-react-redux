import React from 'react'
import {connect} from 'react-redux'
import {getPages} from '../../reducers/index'
import BookmarkItem from '../../components/BookmarkItem/BookmarkItem'
import ItemList from '../../components/ItemList/ItemList'

import {removeBookmark} from '../../actions'

class BookmarksContainer extends React.Component {
    render() {
        const {items, actions} = this.props;

        return (<section className="bookmarks">{!items.length ? <div className="no-bookmarks">No bookmarks</div>:
            <ItemList title="Items">
                {items.map(item =>
                    <BookmarkItem
                        key={item.pageid}
                        item={item}
                        onRemoveButtonClick={() => actions.removeBookmark(item.pageid)}
                    />
                )}
            </ItemList>}
        </section>)
    };
}

function mapStateToProps(state) {
    const items = getPages(state.rootReducer.bookmarks);

    return {
        items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeBookmark: (pageId) => dispatch(removeBookmark(pageId)),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(BookmarksContainer)