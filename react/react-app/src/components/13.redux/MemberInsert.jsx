import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertMember, test } from '../../features/member/memberSlice';
const MemberInsert = () => {
  const member = useSelector((state) => state.member.members);
  const dispatch = useDispatch();

  const nameRef = useRef();
  const ageRef = useRef();
  const regionRef = useRef();

  const handleInsertMember = () => {
    const name = nameRef.current.value.trim();
    const age = ageRef.current.value;
    const region = regionRef.current.value;

    if (name === '' || age === '') {
      alert('이름과 나이를 입력해 주세요.');
      return;
    }

    nameRef.current.value = '';
    ageRef.current.value = '';
    regionRef.current.value = '수도권';

    dispatch(
      insertMember({
        name,
        age,
        region,
      })
    );
  };

  return (
    <div className='insertContainer'>
      <h1>전체 회원 수 : {member.length}</h1>
      <div className='inputBox'>
        <label htmlFor='memberName'>이름 : </label>
        <input
          type='text'
          id='memberName'
          maxLength={20}
          spellCheck='false'
          ref={nameRef}
        />
      </div>
      <div className='inputBox'>
        <label htmlFor='memberAge'>나이 : </label>
        <input type='number' id='memberAge' min={0} ref={ageRef} />
      </div>
      <div className='inputBox'>
        <label htmlFor='memberRegion'>지역 : </label>
        <select name='memberRegion' id='memberRegion' ref={regionRef}>
          <option value='수도권'>수도권</option>
          <option value='충청'>충청</option>
          <option value='호남'>호남</option>
          <option value='영남'>영남</option>
          <option value='강원'>강원</option>
          <option value='제주'>제주</option>
        </select>
      </div>
      <button className='insertBtn' onClick={handleInsertMember}>
        추가
      </button>
    </div>
  );
};

export default MemberInsert;
