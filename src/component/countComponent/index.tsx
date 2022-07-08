import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { countIncrease, countDecrease } from '../../redux/count/counter';
import './countComponent.scss';

interface PropTypes {}
const baseClassName = 'count-component';

const CountComponent: React.FC<PropTypes> = () => {
  const count = useSelector((state: RootState) => state.counterReducer!.count);
  const dispatch = useDispatch();
  const onIncreae = () => {
    dispatch(countIncrease());
  };

  const onDecrease = () => {
    dispatch(countDecrease());
  };

  return (
    <div className={`${baseClassName}`}>
      <span className={`${baseClassName}__title`}>increase/decrease button with Redux</span>
      <div className={`${baseClassName}__wrapper`}>
        <button className={`${baseClassName}__wrapper__btn`} onClick={onDecrease}>
          -
        </button>
        <input className={`${baseClassName}__wrapper__count`} type="text" disabled defaultValue={count} value={count} />
        <button className={`${baseClassName}__wrapper__btn`} onClick={onIncreae}>
          +
        </button>
      </div>
    </div>
  );
};

export default CountComponent;
