import { createAction, handleActions } from 'redux-actions';

const MEMBER_NAME = 'member/MEMBER_NAME';

export const redux_name = createAction(MEMBER_NAME, redux_name => redux_name);

const initialState = {
    redux_name: '',
};

const member = handleActions(
    {
        [MEMBER_NAME]: (state, { payload: redux_name }) => ({ ...state, redux_name })
    },
    initialState,
);

export default member;