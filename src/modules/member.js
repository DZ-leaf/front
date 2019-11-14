import { createAction, handleActions } from 'redux-actions';

// Action Type
const NAME = 'member/NAME';

// Action Creator
export const name = createAction(NAME, name => name);

// Reducer : 상태가 어떻게 바뀌는지
const initialState = {
    id: '',
    name: ''
}

const member = handleActions(
    {
        [NAME]: (state, { payload: name }) => ({ ...state, name }),
    },
    initialState,
)

export default member;