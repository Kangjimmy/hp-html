'use strict';

import { jsonData } from './json_data_index.js';

export const FilterType = Object.freeze({
  공원탐방: '공원탐방',
  교육체험: '교육체험',
  농장체험: '농장체험',
  문화행사: '문화행사',
  산림여가: '산림여가',
  키즈카페: '서울형키즈카페',
  전시_관람: '전시/관람',
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
export function filterData(data, FilterType) {
  const type = FilterType;

  let filterData;
  if (type != FilterType.managed) {
    filterData = data.filter((value) => {
      if (value.MINCLASSNM == type) {
        return true;
      }
    });
  }

  return filterData;
}
