export const REQUEST_PAGES = 'REQUEST_PAGES'
export const RECEIVE_PAGES = 'RECEIVE_PAGES'

function requestPages() {
    return {
        type: REQUEST_PAGES
    }
}

function receivePages(data) {
    return {
        type: RECEIVE_PAGES,
        pages: data
    }
}

export function fetchPages() {
    return function (dispatch) {
        dispatch(requestPages());

        return dispatch(receivePages({}))
    }
}
