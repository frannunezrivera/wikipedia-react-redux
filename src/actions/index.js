export const REQUEST_PAGES = 'REQUEST_PAGES'
export const RECEIVE_PAGES = 'RECEIVE_PAGES'

export const REQUEST_PAGE = 'REQUEST_PAGE'
export const RECEIVE_PAGE = 'RECEIVE_PAGE'

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

function requestPage() {
    return {
        type: REQUEST_PAGE
    }
}

function receivePage(data, pageId) {
    return {
        type: RECEIVE_PAGE,
        detail: data.query.pages,
        pageId: pageId
    }
}

export function fetchPage(pageId) {

    return function (dispatch) {
        dispatch(requestPage());

        return fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Ccategories%7Cextracts&pithumbsize=500&exintro=1&explaintext=1&origin=*&pageids=' + pageId)
            .then(response => response.json())
            .then(json =>
                dispatch(receivePage(json, pageId))
            )

    }
}