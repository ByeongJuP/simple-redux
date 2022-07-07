import React from 'react';
import './memoComponent.scss';

interface PropTypes {}
const baseClassName = 'memo-component';

const MemoComponent: React.FC<PropTypes> = () => {
  return (
    <div className={`${baseClassName}`}>
      <span className={`${baseClassName}__title`}>memo with redux</span>
      <div className={`${baseClassName}__input`}>
        <input className={`${baseClassName}__input__write`} type="text" />
        <button className={`${baseClassName}__input__btn`}>등록</button>
      </div>
      <hr className={`${baseClassName}__horizon`} />
      <div className={`${baseClassName}__memo`}>
        <ul className={`${baseClassName}__memo__list`}>
          <li className={`${baseClassName}__memo__list__content`}>
            <span className={`${baseClassName}__memo__list__content__text`}>study redux!</span>
            <button className={`${baseClassName}__memo__list__content__btn`}>X</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MemoComponent;
