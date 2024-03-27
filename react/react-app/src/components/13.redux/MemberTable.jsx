import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMember } from '../../features/member/memberSlice';

const MemberTable = () => {
  const members = useSelector((state) => state.member.members);
  const dispatch = useDispatch();
  const handleDeleteMember = (id) => {
    dispatch(deleteMember(id));
  };
  return (
    <div className='tableContainer'>
      <table className='table'>
        <thead className='trRow'>
          <tr>
            <th className='thName'>이름</th>
            <th className='thAge'>나이</th>
            <th className='thRegion'>지역</th>
            <th className='thDelete'>삭제</th>
          </tr>
        </thead>
        <tbody>
          {members.length !== 0 &&
            members.map((member) => (
              <tr className='tbTr' key={member.id}>
                <td>{member.name}</td>
                <td>{member.age}</td>
                <td>{member.region}</td>
                <td>
                  <button
                    className='btnDelete'
                    onClick={() => {
                      handleDeleteMember(member.id);
                    }}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTable;
