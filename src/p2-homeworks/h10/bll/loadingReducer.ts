const WORK = 'WORK'
export type InitStateType = {
    load: boolean
}
const initState: InitStateType = {
    load: false
};

export const loadingReducer = (state = initState, action: ChangeActionType): InitStateType => {

    switch (action.type) {
        case WORK: {
            return {...state, load: action.load};
        }
        default:
            return state;
    }
};
export type ChangeActionType = {
    type: 'WORK',
    load: boolean
};
export const loadingAC = (load: boolean): ChangeActionType => {
    return {type: WORK, load} as const
};