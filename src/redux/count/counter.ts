import * as actionTypes from './action';

type CounterState = {
  count: number;
};

export const countIncrease = () => ({
  type: actionTypes.COUNT_INCREASE
});

export const countDecrease = () => ({
  type: actionTypes.COUNT_DECREASE
});

const initForm: CounterState = {
  count: 0
};

export default (state = initForm, action: any) => {
  switch (action.type) {
    case actionTypes.COUNT_INCREASE:
      return { count: state.count + 1 };
    case actionTypes.COUNT_DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
