export const REQUEST_PAGES = 'REQUEST_PAGES'
export const RECEIVE_PAGES = 'RECEIVE_PAGES'

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

export const getPages = state => {
    return state.pageIds.map(id => getPage(state, id));
}