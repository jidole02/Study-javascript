/* let choice = document.getElementById('choice');

window.onload = function(){
    console.log(choice)
} */
let tmp = `
<option value="">시카고</option>
        <option value="">블랙토</option>
        `

let choice3 = document.getElementById('choice3');
$('#choice').on('change',function(){
    console.log($('#choice').val())
    if($('#choice').val() == '나이키'){
        console.log(tmp)
        choice3.innerHTML = tmp
    }
    else{
        choice3.innerHTML = `<option value="">옵션이 없습니다.</option>`
    }
})

/* window.onload = function(){
    console.log($('#choice option:selected').val())
} */

