let getW = document.getElementById('getWeatherForcast')
let city = document.getElementById('city');

window.onload = function(){
    getW.addEventListener('click',function(){
        let atmos;
        let cityVal = city.value;
        let key = '680fa4640e3a07aa6def97577ad7e05c';

        let infor = {
            url : 'http://api.openweathermap.org/data/2.5/weather',
            dataType : 'json',
            type: 'Get',
            data: {q:city, appid:key, units:'metric'}, // 도시, api키, 단위법

            success: function(){
                let wf = '';
                let atmos = "";
                $.each(data.weather, function(index, val){
                    wf += '<p><b>' + data.name + '</p></b>' +
                    data.main.temp + '°C ' + ' | ' + val.main + ", " +
                    val.description
                    atmos = val.main;//날씨를 변수로 지정
                    });//선택한 요소의 속성src의 이미지 값을 weatherImg에 줌
                    $("#showWeatherForcast").html(wf);
            }
        }
    })
}