# Vanilla Redux
바닐라 자바스크립트와 리덕스 사용하기

## reducer 
현재 상태의 application과 함께 불려지는 function (+ with action)  
return하는 것은 application의 state가 됨

## action 
reducer와 소통하는 방법으로 Object여야 하며 그 key 이름은 항상 type임 (바꿀 수 없음)

## dispatch 
reducer에게 action을 보내는 방법

## subscribe 
store의 변화를 감지하면 인자값으로 준 함수를 실행

## switch가 자주 쓰임
```javascript
switch(action.type){
  case ..blah..:
    return smth
  case ..blah2..:
    return smth2
  default:
    return smth3
}
```
