function showDate(){
    let out = document.getElementById('current-date');
    let out_1 = document.getElementById('current-date1');
    let out_2 = document.getElementById('current-date2');
    let out_3 = document.getElementById('current-date3');
    let out_4 = document.getElementById('current-date4');
    let Today = new Date ();
    out.innerHTML ="Дата и время для русской локали: " + Today.toLocaleString('ru-RU');
    out_1.innerHTML ="Дата и время для американской локали: " + Today.toLocaleString('en-US');
    out_2.innerHTML ="Дата и время для французской локали: " + Today.toLocaleString('fr-FR');
    out_3.innerHTML ="Дата и время для японской локали: " + Today.toLocaleString('ja-JP');
    out_4.innerHTML ="Дата и время для китайской локали: " + Today.toLocaleString('zh-CN');
}

function showDaysCount(){
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    let days = document.getElementById('days').innerHTML = 'Количество дней с даты рождения: ' + daysCount;
}

function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000);


function ClearAll(){
    let inputDate = document.querySelector('input[type=date');
    let day = document.getElementById('days');

    inputDate.value = '';
    day.innerHTML = '';
}