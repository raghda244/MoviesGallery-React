const initial={
    favourites:[]
}
export default function FavouritesReducers(state = initial,action){
    switch (action.type) {
        case "ADD_FAVOURITE":
        return {
            ...state,
            favourites:[action.payload,...state.favourites]
        }
        case "REMOVE_FAVOURITE":
        return {
            ...state,
            favourites:state.favourites.filter(i=> i!==action.payload)
        }
        default:
            return state;
    }
}