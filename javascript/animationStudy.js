/* $(window).on('scroll',function(){
    if($(window).scrollTop() > 200){
        $('header').css({backgroundColor : 'blue'})
        $('header').css({transition : '1s'})
    }
    else{
        $('header').css({backgroundColor : 'black'})
    }
})
 */
var a = 100;
var objA = {value:100};
function change(){
    num = 200;
    objA.value = 200;
    console.log(num);
    console.log(objA);
}

change(a,objA);
console.log(a);
console.log(objA);