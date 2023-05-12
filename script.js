window.onload = function() {
    // 獲取當前時間並格式化為 HH:MM 格式
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var currentTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;

    // 將開始時間的預設值設定為當前時間
    document.getElementById('start_time').value = currentTime;
}