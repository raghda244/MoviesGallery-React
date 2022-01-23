export function AddFavourite(data) {
    return {
    type: "ADD_FAVOURITE",
    payload: data,
    };
}
export function RemoveFavourite(data) {
    return {
    type: "REMOVE_FAVOURITE",
    payload: data,
    };
}