$(document).ready(function(){
    $("#getWeatherForcast").click(function(){
    var atmos;
    var city = $("#city").val();//입력한 도시정보 가져오는듯 - 단일 모드
    var key = '680fa4640e3a07aa6def97577ad7e05c';
    
    $.ajax({/* ajax는 새로고침할 필요없이 버튼을 클릭하면 자동으로 새로 기능이 수행하게끔 해준다. */
    url: 'http://api.openweathermap.org/data/2.5/weather',//이미지
    dataType: 'json',
    type: 'GET',
    data: {q:city, appid:key, units:'metric'},//도시 API키 단위법:섭씨, 키, 기간
    
    success: function(data){//출력부
    var wf = '';
    var atmos = "";
    $.each(data.weather, function(index, val){
    wf += '<p><b>' + data.name + '</p></b>' +
    data.main.temp + '°C ' + ' | ' + val.main + ", " +
    val.description
    atmos = val.main;//날씨를 변수로 지정
/*     var image;
    if(atmos == "Clear"){
    image ="./image/clear.jpg";
    }else if(atmos == "Rain"){
    image ="./image/rain.png";
    }else if(atmos == "Clouds"){
    image ="./image/cloud.jpg";
    } */

/*     $("#weatherImg").attr("src", image); */
    });//선택한 요소의 속성src의 이미지 값을 weatherImg에 줌
    $("#showWeatherForcast").html(wf);
    }
    });
    });
    });
