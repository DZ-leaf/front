import { createAction, handleActions } from 'redux-actions';

const SAMPLE_ACTION = 'member/SAMPLE_ACTION';

export const sampleAction = createAction(SAMPLE_ACTION);

const initialState = {};

const member = handleActions(
    {
        [SAMPLE_ACTION] : (state, action) => state,
    },
    initialState,
);

export default member;