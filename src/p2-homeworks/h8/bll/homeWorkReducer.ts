import {ActionsType, InitialPeopleType} from '../HW8';

export const homeWorkReducer = (state: Array<InitialPeopleType>, action: ActionsType): Array<InitialPeopleType> => {
    switch (action.type) {
        case 'sort': {
            if (action.payload == 'up') {
                return  [...state].sort((a, b) => a.name > b.name ? 1 : -1)

            } else if (action.payload == 'down') {
                return [...state].sort((a, b) => a.name < b.name ? 1 : -1)
            }
        }
        case 'check': {
            return [...state].filter(state => state.age > action.payload)
        }
        default:
            return state
    }
};