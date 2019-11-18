import { createAction, handleActions } from 'redux-actions';

const MEMBER_INFO = 'member/MEMBER_INFO';

export const memberInfo = createAction(MEMBER_INFO, memberInfo => memberInfo);

const initialState = {
    memberInfo : {},
};

const member = handleActions(
    {
        [MEMBER_INFO]: (state, { payload: memberInfo }) => ({ ...state, memberInfo })
    },
    initialState,
);

export default member;