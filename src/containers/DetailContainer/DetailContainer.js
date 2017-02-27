import React from 'react'
import {connect} from 'react-redux'
import {getPageDetail} from '../../reducers/index'
import PageDetail from '../../components/PageDetail/PageDetail'

import {fetchPage, addBookmark, removeBookmark} from '../../actions'

class DetailContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleBookmarkButton = this.handleBookmarkButton.bind(this);
    }

    componentDidMount() {
        const {actions, params, isFetching} = this.props;
        if (isFetching && params.id) {
            actions.fetchPage(params.id);
        }
    }

    handleBookmarkButton() {
        const {pageDetail, isBookmarked, actions} = this.props;

        if (isBookmarked) {
            return () => actions.removeBookmark(pageDetail.pageid)
        } else {
            return () => actions.addBookmark(pageDetail.pageid)
        }
    }

    render() {
        const {pageDetail, isFetching, isBookmarked} = this.props;


        return (<section>
            {isFetching ? 'Loading...' :
                <PageDetail
                    key={pageDetail.pageid}
                    item={pageDetail}
                    isBookmarked={isBookmarked}
                    handleBookmarkButton={this.handleBookmarkButton()}
                />
            }
        </section>)
    }
}

function mapStateToProps(state, props) {
    const {id} = props.params;
    const {bookmarks} = state.rootReducer;
    let isFetching;

    const pageDetail = getPageDetail(state.rootReducer, id);
    const isBookmarked = bookmarks.pageIds.indexOf(parseInt(id, 10)) !== -1;


    isFetching = !pageDetail;

    return {
        pageDetail,
        isFetching,
        isBookmarked
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            fetchPage: (pageId) => dispatch(fetchPage(pageId)),
            addBookmark: (pageId) => dispatch(addBookmark(pageId)),
            removeBookmark: (pageId) => dispatch(removeBookmark(pageId)),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(DetailContainer)