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
    return state;
}

export default rootReducer;