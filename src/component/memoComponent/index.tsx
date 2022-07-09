import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { memoCreate, memoDelete, MemoState } from '../../redux/memo/memo';
import './memoComponent.scss';

interface PropTypes {}
const baseClassName = 'memo-component';

const MemoComponent: React.FC<PropTypes> = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const memos: MemoState = useSelector((state: RootState) => state.memoReducer);

  const onMemoCreate = () => {
    if (!!inputRef.current!.value) {
      dispatch(memoCreate(inputRef.current!.value));
    } else {
      alert('내용을 입력해 주세요');
      inputRef.current!.focus();
    }
    inputRef.current!.value = '';
  };

  const onMemoDelete = (idx: number) => {
    dispatch(memoDelete(idx));
  };

  return (
    <div className={`${baseClassName}`}>
      <span className={`${baseClassName}__title`}>memo with redux</span>
      <div className={`${baseClassName}__input`}>
        <input className={`${baseClassName}__input__write`} type="text" ref={inputRef} />
        <button className={`${baseClassName}__input__btn`} onClick={onMemoCreate}>
          등록
        </button>
      </div>
      <hr className={`${baseClassName}__horizon`} />
      <div className={`${baseClassName}__memo`}>
        {!memos.content.length ? (
          <></>
        ) : (
          memos.content.map((x, idx) => (
            <ul className={`${baseClassName}__memo__list`} key={idx}>
              <li className={`${baseClassName}__memo__list__content`}>
                <span className={`${baseClassName}__memo__list__content__text`}>{x}</span>
                <button className={`${baseClassName}__memo__list__content__btn`} onClick={() => onMemoDelete(idx)}>
                  X
                </button>
              </li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default MemoComponent;
