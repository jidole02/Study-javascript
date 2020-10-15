**Node객체** :  모든 객체의 뿌리와 같은 역할. Node와 연결된 정보를 보여주는 API를 통해서 문서를 프로그래밍적으로 탐색할 수 있다. 모든 객체는 Node를 상속받는다.

**firstChild** : 첫번째 자식을 탐색한다. 

```html
<ul id="start"> // #text
    <li></li>
</ul>
```



이런 코드가 있다면 start의 firstChild를 탐색했을 때에 **#text** 가 출력될 것이다. ul태그와 li태그 사이에 보이지 않는 text가 있기 때문이다.

**nextSibling** : 다음 객체를 조회한다.

**previousSibling** : 이전 객체를 조회한다.

**childNodes** : 자신의 자식 객체를 모두 조회한다.또한 유사 배열 형태이다.

```javascript
for(let i = 0; i < start.childNodes.length;i++){
    start.childNodes[i].style.color = 'red';
}
```

이렇게 주게 되면 에러가 난다. 왜냐하면 #text에는 style값이 적용되지 않기 때문이다.



**nodeType** : 객체가 어떤 node type인지를 출력해준다.

**nodeName** : 객체의 tag명을 제공한다.