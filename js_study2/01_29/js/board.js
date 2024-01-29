'use strict';

window.addEventListener('load', showBoard);

const tbody = document.querySelector('tbody');

function showBoard() {
  fetch('http://localhost:4000/books')
    .then((response) => response.json())
    .then((arr) => {
      arr.forEach((data) => {
        addList(data);
      });
    })
    .catch((error) => console.log(error));
}

function addList(data) {
  let list = `<tr>`;
  list += `<td>${data.id}</td>`;
  list += `<td>${data.title}</td>`;
  list += `<td>${data.publisher}</td>`;
  list += `<td>${data.price}</td>`;
  list += `</tr>`;

  tbody.innerHTML += list;
  list = '';
}

// form 태그 찾기
const form = document.querySelector('#save');
form.addEventListener('submit', (event) => {
  // 디폴트 행동 제거
  event.preventDefault();
  // FormData 객체 생성
  const fromData = new FormData(form);

  console.log([...fromData]);

  //URLSearchParams 객체 생성
  // const bookInfo = new URLSearchParams(formData);
  // console.log(bookInfo.entries());
  const newData = Object.fromEntries(fromData);
  // 서버에 데이터 전송
  fetch('http://localhost:4000/books', {
    method: 'POST',
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
