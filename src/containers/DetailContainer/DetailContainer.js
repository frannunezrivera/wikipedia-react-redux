import React from 'react'
import {connect} from 'react-redux'
import {getPageDetail} from '../../reducers/index'
import PageDetail from '../../components/PageDetail/PageDetail'

import {fetchPage} from '../../actions'

class DetailContainer extends React.Component {

    componentDidMount() {
        const {actions, params, isFetching} = this.props;
        if (isFetching && params.id) {
            actions.fetchPage(params.id);
        }
    }

    render() {
        const {pageDetail, isFetching} = this.props;


        return (<section>
            {isFetching ? 'Loading...' :
                <PageDetail
                    key={pageDetail.pageid}
                    item={pageDetail}
                />
            }
        </section>)
    }
}

function mapStateToProps(state, props) {
    const {id} = props.params;
    let isFetching;

    const pageDetail = getPageDetail(state.rootReducer, id);


    isFetching = !pageDetail;

    return {
        pageDetail,
        isFetching
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            fetchPage: (pageId) => dispatch(fetchPage(pageId)),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(DetailContainer)