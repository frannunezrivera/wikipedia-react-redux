import React from 'react'
import {connect} from 'react-redux'
import {getPages} from '../../reducers/index'
import Item from '../../components/Item/Item'
import ItemList from '../../components/ItemList/ItemList'

import {fetchPages} from '../../actions'

class PagesContainer extends React.Component {
    componentDidMount() {
        const {actions, isFetching} = this.props;
        if (isFetching) {
            actions.fetchPages();
        }

    }

    render() {
        const {pages, isFetching} = this.props;

        return (<section>{isFetching || !pages ? 'Loading...' :
            <ItemList>
                {pages.map(page =>
                    <Item
                        key={page.pageid}
                        item={page}
                    />
                )}
            </ItemList>}
        </section>)
    };
}

function mapStateToProps(state) {
    const {items} = state.rootReducer;
    let isFetching;

    const pages = getPages(items);
    isFetching = !items.pageIds.length;

    return {
        pages,
        isFetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            fetchPages: () => dispatch(fetchPages()),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(PagesContainer)