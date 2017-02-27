import {
    REQUEST_PAGES, RECEIVE_PAGES, RECEIVE_PAGE, REQUEST_PAGE
} from '../actions'

const initialState = {
    items: {
        pageIds: [],
        pagesById: {}
    },
    pageDetails: {},
    bookmarks: {
        pageIds: [],
        pagesById: {}
    }
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_PAGES:
        case RECEIVE_PAGES:
            return Object.assign({}, state, pages(state, action));
        case REQUEST_PAGE:
        case RECEIVE_PAGE:
            return Object.assign({}, state, pageDetail(state, action));
        default:
            return state
    }
}

const pageDetail = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PAGE:
            return Object.assign({}, state, {
                pageDetails: {
                    [action.pageId]: action.detail[action.pageId]
                },
            })
        default:
            return state
    }
}

const pagesById = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PAGES:
            return {
                ...state,
                ...action.pages
            };
        default:
            return state;
    }
};

const pageIds = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PAGES:
            let pages = [];
            Object.keys(action.pages).forEach(function (key) {
                pages.push(key);
            });
            return pages;
        default:
            return state
    }
};

function pages(state, action) {
    switch (action.type) {
        case RECEIVE_PAGES:
            return Object.assign({}, state, {
                items: {
                    pageIds: pageIds(state, action),
                    pagesById: pagesById(state, action)
                },
            });
        default:
            return state
    }
}

export default rootReducer;

export const getPage = (state, id) =>
    state.pagesById[id];

export const getPages = state =>
    state.pageIds.map(id => getPage(state, id));

export const getPageDetail = (state, id) =>
    state.pageDetails[id];