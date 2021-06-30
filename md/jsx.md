
### JSX 강의 정리

JSX란?
===
보기엔 html과 비슷.
JSX 로 작성한 코드를 바벨에서 변형시켜줌.

규칙
---
1. 태그는 꼭 닫아야 한다.
- ```<div> 태그는 꼭 닫기. </div>```
- ```<Hello />```

2. 2개 이상의 태그는 하나의 태그로 감싸 있어야 한다.(vue template안에 쓰는 것처럼)
```javascript
<>
    <div> 두개 이상의 </div>
    <p> 태그는 감싸자 </p>
</>
```

3. javascript 사용법.
```javascript
    const name = "이렇게";
    return <div> 자바스크립트 값 보여줄 땐, { name } </div>
```

4. style, class 사용법
```javascript
const style = {
    backgroundColor: "grey",
}
return (
    <div style={style}>
        <div className="my-style">
               style과 className
        </div>
    </div>
)
```
5. 주석 사용법 
```javascript
return (
    <div>
        {/* 주석은 이렇게 */}
        <input 
         // 또는 이렇게 작성하면 안 보여~ 
        />
    </div>
)
```

6. - return 다음에 괄호로 감싸는 것 부과적인 것. 가독성을 위해서 사용.

