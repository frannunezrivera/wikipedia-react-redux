import {
    REQUEST_PAGES, RECEIVE_PAGES, RECEIVE_PAGE, REQUEST_PAGE, ADD_BOOKMARK, REMOVE_BOOKMARK
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
        case ADD_BOOKMARK:
            if (action.pageId) {
                return Object.assign({}, state.bookmarks.pagesById, {
                    [action.pageId]: state.pageDetails[action.pageId]
                })
            }
            return state.bookmarks;
        case REMOVE_BOOKMARK:
            if (action.pageId) {
                return Object.assign({}, Object.keys(state.bookmarks.pagesById).reduce(function (result, key) {
                    if (parseInt(key, 10) !== action.pageId) {
                        result[key] = state.bookmarks.pagesById[key];
                    }
                    return result;
                }, {}))
            }
            return state.bookmarks;
        default:
            return state;
    }
};

const bookmarks = (state = {}, action) => {
    switch (action.type) {
        case ADD_BOOKMARK:
            return Object.assign({}, state, {
                bookmarks: {
                    pageIds: [...state.bookmarks.pageIds, action.pageId],
                    pagesById: pagesById(state, action)
                }
            })
        case REMOVE_BOOKMARK:
            return Object.assign({}, state, {
                bookmarks: {
                    pageIds: state.bookmarks.pageIds.filter(function (pageId) {
                        return pageId !== action.pageId
                    }),
                    pagesById: pagesById(state, action)
                }
            })
        default:
            return state
    }
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_PAGES:
        case RECEIVE_PAGES:
            return Object.assign({}, state, pages(state, action));
        case REQUEST_PAGE:
        case RECEIVE_PAGE:
            return Object.assign({}, state, pageDetail(state, action));
        case ADD_BOOKMARK:
        case REMOVE_BOOKMARK:
            return Object.assign({}, state, bookmarks(state, action));
        default:
            return state
    }
}

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