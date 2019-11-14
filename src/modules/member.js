import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// Action Type
const CHANGE_NAME = 'member/CHANGE_NAME';

// Action Creator
export const changeName = createAction(CHANGE_NAME, ({key, value}) => ({
    key,
    value
}));

// Reducer : 상태가 어떻게 바뀌는지
const initialState = {
    name: '',
}

const member = handleActions(
    {
        [CHANGE_NAME]: (state, { payload: key, value }) => {
            console.log(key)
            console.log(value)
        }
        // produce(state, draft => {
        //     draft[key] = value;
        // }),
    },
    initialState,
)

export default member;