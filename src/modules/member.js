import { createAction, handleActions } from 'redux-actions';

// Action Type
const ID = 'member/ID';
const NAME = 'member/NAME';

// Action Creator
export const id = createAction(ID, id => id);
export const name = createAction(NAME, name => name);

// Reducer : 상태가 어떻게 바뀌는지
const initialState = {
    id: '',
    name: ''
}

const member = handleActions(
    {
        [ID]: (state, action) => ({ ...state, id: action.payload }),
        [NAME]: (state, action) => ({ ...state, name: action.payload }),
    },
    initialState,
)

export default member;