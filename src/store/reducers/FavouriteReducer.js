const initial={
    favourites:[]
}
export default function FavouritesReducers(state = initial,action){
    switch (action.type) {
        case "ADD_FAVOURITE":
        return {
            ...state,
            favourites:[action.payload,...state.favourites]
            // state.favourites.push(action.payload);
            // return state;
        }
        case "REMOVE_FAVOURITE":
        return {
            ...state,
            favourites:state.favourites.filter(i=> i!==action.payload)
            // state.favourites.splice(state.favourites.indexOf(action.payload),1)
            // return state;
        }
        default:
            return state;
    }
}