// 監聽滾動事件
window.addEventListener('scroll', function () {
    var button = document.querySelector('.menu');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 200) {
        // 滾動距離超過 200px，顯示按鈕
        button.classList.add('show');
    } else {
        // 滾動距離小於 200px，隱藏按鈕
        button.classList.remove('show');
    }
});

// 回到最上層
var topButton = document.querySelector('.menu a');

topButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滾動效果，需要瀏覽器支援
    });
});
