# 그래서 this가 뭔데?

----

java에서의 this는 인스턴스 자신(self)을 가리키는 참조 변수이다. 하지만 **javascript** 에서는 java와 같이 this에 바인딩 되는 객체는 한가지가 아니라 해당 함수 호출 방식에 따라 this에 **바인딩**되는 객체가 달라진다. javascript에서는 선언할 때에 결정되는 아이가 있고 호출할 때에 결정되는 아이가 있는데 this는 후자에 속한다.

* 인스턴스: 객체지향 프로그래밍에서 인스턴스는 컴퓨터 저장공간에서 할당된 실체를 의미한다.
* 바인딩: 특정 객체에서 실행되게끔 고정시키는 역할

아래 예시를 통해 this의 특성에 대해 알아보자.

```javascript
let someone = {
    name: 'jiwon',
    who: function(){
        console.log(this);
    }
};

someone.who();
```

이렇게 되면 console에서 **{name: "jiwon", who: ƒ}** 을 출력하게 된다. this가 자기 자신을 가리키고 있기 때문이다.하지만

```javascript
let someone = {
    name: 'jiwon',
    who: function(){
        console.log(this);
    }
};

someone.who();

let whoAmI = someone.who;
whoAmI();
```

아래와 같이 작성하면 **whoAmI();**는 분명 **someone.who();**와 같은 곳을 가리키는 데도**Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}** 을 출력한다. 이는 누가 호출했냐에 따라 출력 값이 다르기 때문이다.

* someone.who();는 someone이 호출하였으므로 자기 자신을 출력한다.
* 반면 whoAmI는 윈도우가 호출한 것이므로 window를 출력하게 된다.

### 따라서  *this === 자기를 호출한 놈*   이란 것을 알 수 있다.

여기서 bind라는 녀석이 등장한다.

```javascript
let bind = whoAmI.bind(someone);
bind();
```

이를 출력하면  **{name: "jiwon", who: ƒ}** 이 나온다. 따라서 bind는 this를 호출과 무관하게 묶어주는 녀석이다. 









