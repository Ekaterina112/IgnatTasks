const WORK = 'WORK'
export type InitStateType = {
    isLoad: boolean
}
const initState: InitStateType = {
    isLoad: false
};

export const loadingReducer = (state = initState, action: ChangeActionType): InitStateType => {

    switch (action.type) {
        case WORK: {
            return {...state, isLoad: action.isLoad};
        }
        default:
            return state;
    }
};
export type ChangeActionType = {
    type: 'WORK',
    isLoad: boolean
};
export const loadingAC = (isLoad: boolean): ChangeActionType => {
    return {type: WORK, isLoad} as const
};