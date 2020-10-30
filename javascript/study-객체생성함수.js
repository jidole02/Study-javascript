let foo = new Object();

foo.name = 'foo';
foo.nickName = 'fool';

console.log(foo);
// object를 이용한 객체 생성 방식

let foo2 = {
    name: 'jiwon',
    age: 18,
    gender: 'male',
    func1: function(){
        console.log('sdfsdf0')
    }
};

console.log(foo2);
// 객체 리터럴 방식을 이용한 객체 생성

let person = function(name){
    this.name = name;
}

let foo3 = new person('jiwon');
console.log(foo3.name)


let foo4 = "dsfsf"

console.log(foo4.length)