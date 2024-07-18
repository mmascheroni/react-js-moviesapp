const listReducer = (initialState = [], action) => {
    switch (action.type) {
        case 'add':
            if (!initialState.some((e) => e.id == action.payload.id)) {
                return [...initialState, action.payload];
            }
            break;

        case 'delete':
            return initialState.filter((title) => title.id != action.payload);

        default:
            return initialState;
    }
};

export default listReducer;
