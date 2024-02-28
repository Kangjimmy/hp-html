$(document).ready(function () {
  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,

    // 네비게이션
    navigation: true,
    navigationPosition: 'right',

    // 앵커
    anchors: ['menu1', 'menu2', 'menu3', 'menu4', 'menu5'],

    // 배경색
    sectionsColor: ['yellow', 'orange', 'green', 'blue', '#369F36'],
  });
});
