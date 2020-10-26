#  pass by value

----

-인자로 넘기는 값을 복사해서 새로운 함수에 전달하는 방식.

- 장점 : 원본값이 변경될 가능성이 없다.

- 단점 : 고비용과 메모리의 문제점이 있다.

  ```javascript
  let a = 1;
  let b = a;
  
  console.log(a,b); // a = 1, b = 1
  console.log(a === b); // true출력
  
  a = 10; // a값은 여전히 1이지만 b의 값은 10이 된다.
  console.log(a, b); // a = 1, b = 10;
  ```

  

# pass by reference

----

-주소값을 인자로 전달하는 방식. **변수에 할당되어 있는 객체의 주소값이 복사된다.**

- 장점 : 함수 내부에서 아무리 객체를 변형시키더라도 외부의 객체에 영향을 줄 수 없다.

- 단점 : 참조에 의한 호출은 원본값의 변경이 일어날 수도 있다는 문제점이 있다.

  ```javascript
  let bar = foo;
  console.log(foo.val, bar.val);
  console.log(foo === bar);
  
  bar.val = 20;
  console.log(foo.val, bar.val);
  console.log(foo === bar);
  ```

  # 프로토타입이란?

  ----

  - 자바스크립트 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 그리고 이것은 마치 객체 지향의 상속개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다. 이러한 부모 객체를 프로토타입이라 한다.

  - 자바스크립트는 **프로토타입** 기반 언어이다. 프로토타입 기반 프로그래밍은 **클래스** 기반 언어에서 상속을 사용하는 것과 다르게, 객체를 프로토타입으로 하여 복제의 과정을 통하여 객체의 동작방식을 다시 사용할 수 있다.

  - 프로토타입 기반 객체지향 프로그래밍 언어는 클래스 없이도 객체를 생성할 수 있다.

  - **함수를 정의하면 함수만 생성되는 것이 아니라 prototype Object도 같이 생성된다. ** 

    # 프로토타입 체인

    ----

    - 프로토타입이 상위 프로토타입까지 연결되는 구조를 말한다.

    - 하위 프로토타입은 상위 프로토타입의 속성과 메소드를 공유 받는다.
  
      ```javascript
      function person(name, age){
          this.hand = 2;
          this.name = name;
          this.age = age;
      }
      
      let goddaehee = new person('jiwon', 17);
      
      let firstParent = goddaehee.__proto__; // __proto__ : object와 함수 모두 갖고있는 속성.
      // __proto__는 결국 object를 가르킨다.
      console.log(firstParent); // constructor : f perons(name, age) 
      // (constructor : 함수 생성시 부여하는 속성 )
      
      var secondParent = firstParent.__proto__; console.log(secondParent); 
      // constructor: f Object(); 
      
      var thirdParent = secondParent.__proto__; 
      console.log(thirdParent); // null
      ```
    
      - 프로토타입 체인의 조건 : 특정 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면 진행한다.
    
    