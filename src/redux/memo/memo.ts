import * as actionTypes from './action';

export type MemoState = {
  content: string[];
  text: string | null;
  index: number;
};

export const memoCreate = (text: string) => ({
  type: actionTypes.MEMO_CREAET,
  text
});

export const memoDelete = (index: number) => ({
  type: actionTypes.MEMOO_DELETE,
  index
});

const initForm: MemoState = { content: [], text: null, index: -1 };

export default (state = initForm, action: any) => {
  switch (action.type) {
    case actionTypes.MEMO_CREAET:
      return { ...state, content: [...state.content, action.text], text: null };
    case actionTypes.MEMOO_DELETE:
      return { ...state, content: [...state.content.filter((_, idx) => idx !== action.index)], index: -1 };
    default:
      return state;
  }
};
