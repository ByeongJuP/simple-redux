import React from 'react';
import './countComponent.scss';

interface PropTypes {}
const baseClassName = 'count-component';

const CountComponent: React.FC<PropTypes> = () => {
  return (
    <div className={`${baseClassName}`}>
      <span className={`${baseClassName}__title`}>increase/decrease button with Redux</span>
      <div className={`${baseClassName}__wrapper`}>
        <button className={`${baseClassName}__wrapper__btn`}>-</button>
        <input className={`${baseClassName}__wrapper__count`} type="text" disabled defaultValue={0} />
        <button className={`${baseClassName}__wrapper__btn`}>+</button>
      </div>
    </div>
  );
};

export default CountComponent;
