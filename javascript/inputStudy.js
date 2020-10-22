let nameVal // 이름
let numVal; // 학번
let Container = document.getElementById('container')


const sub = {
    submitBtn :  document.getElementById('submit'),
    nameInput : document.getElementById('name'),
    numInput : document.getElementById('num')
} // 제출버튼 / 제출값 넘기는 자료
function nameValFunc(){
    nameVal = document.getElementById('name').value;
    numVal = document.getElementById('num').value;
}

let nameMeterial = [100]; // 이름 자료 담기
let i = 0;

function submit(){
    nameMeterial[i] = nameVal; // 이름 배열형식으로 담기
    console.log(nameMeterial[i])
    Container.insertAdjacentHTML('beforebegin', 
    '<div class="sell">' + nameVal + numVal + '</div>'
    );
    sub.nameInput.value = "";
    sub.numInput.value = "";
    console.log(nameMeterial[0]);
    i++;
}

let serchinput = document.getElementById('search');
let serchBtn = document.getElementById('subSearch');
serchBtn.addEventListener('click',function(){
    console.log(nameMeterial[0]);
})
/*     console.log(serchBtn.value)
    if(serchBtn.value == "jiwon"){
        alert('sdf');
    }
    serchBtn.value = ""; */


