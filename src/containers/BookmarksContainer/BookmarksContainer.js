import React from 'react'
import {connect} from 'react-redux'
import {getPages} from '../../reducers/index'
import Item from '../../components/Item/Item'
import ItemList from '../../components/ItemList/ItemList'

import {removeBookmark} from '../../actions'

class BookmarksContainer extends React.Component {
    render() {
        const {items} = this.props;

        return (<section>{!items.length ? <div className="no-bookmarks">No bookmarks</div>:
            <ItemList title="Items">
                {items.map(item =>
                    <Item
                        key={item.pageid}
                        item={item}
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


export default connect(
    mapStateToProps)(BookmarksContainer)