'use strict';
import jsonData from './dataSeoul.json' assert { type: 'json' };

export const FilterType = Object.freeze({
  park: '공원탐방',
  edu: '교육체험',
  farm: '농장체험',
  culture: '문화행사',
  forest: '산림여가',
  cafe: '서울형키즈카페',
  exhibition: '전시/관람',
});

/**
 * filter 타입에 따라서 데이터를 반환
 * 만약 들어오지 않으면 managed(안내중, 접수중)인 데이터로 반환
 */
export function getManagedData() {
  const managedData = jsonData.filter((value) => {
    if (value.SVCSTATNM == '접수중' || value.SVCSTATNM == '안내중') {
      return true;
    }
  });

  return managedData;
}

/**
 *
 * @param {*} data - getManagedData를 통해서 걸러진(예약종료, 접수종료된 데이터를 제외시키기 위함) 데이터를 파라미터로 넣는다.
 * @param {*} FilterType
 * @returns 소행사분류에 따라 필터처리된 데이터
 */
export function filterData(data, FilterType) {
  const type = FilterType;

  let filterData;
  filterData = data.filter((value) => {
    if (value.MINCLASSNM == type) {
      return true;
    }
  });

  return filterData;
}
