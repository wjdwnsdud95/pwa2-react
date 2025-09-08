import { useDispatch, useSelector } from 'react-redux';
import './Detail.css';
import { addnumCnt, minusnumCnt, changenumCnt } from '../store/slices/detail.js';
import { useState } from 'react';

function Detail() {
  const numCnt = useSelector(state => state.detail.numCnt);

  const dispatch = useDispatch();

  const [numval, setnumval] = useState(0);

  const convertAndSetNumber = (e) => {
    if(!isNaN(e.target.value)) {
      setnumval(parseInt(e.target.value));
    }
    else {
      console.error('숫자 아니다.');
    }
  }

  return (
    <>
      <h1>상세 페이지</h1>
      <p>{numCnt}</p>
      <input type="number" onChange={ convertAndSetNumber } />
      <button type="button" onClick={() => { dispatch(changenumCnt(numval)) }}>입력</button>
      <button type="button" onClick={() => { dispatch(addnumCnt()) }}>+</button>
      <button type="button" onClick={() => { dispatch(minusnumCnt()) }}>-</button>
    </>
  )
}

export default Detail;