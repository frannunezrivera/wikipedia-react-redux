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
        pages: data.query.pages
    }
}

export function fetchPages() {
    return function (dispatch) {
        dispatch(requestPages());

        return fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&generator=random&grnnamespace=0&grnlimit=10&origin=*')
            .then(response => response.json())
            .then(json =>
                dispatch(receivePages(json))
            )
    }
}