# Vanilla fadeIn

`Jquery`없이, 심지어 `CSS`도 없이 js파일 하나만으로 페이드인 기능을 사용하는 분들을 위한 스크립트 입니다.
별도의 CSS나 라이브러리가 전혀 필요 없습니다.

[Demo](https://www.gloomy-store.com/demo/vanillaFadeIn/){target="_blank"}

### CDN

javascript
```html
<script src="https://cdn.gloomy-store.com/vanillaFadeIn/vanillaFadeIn.js"></script>
```

## Type

두 가지 타입으로 사용이 가능합니다.
1. `단독사용(manual)`
2. `화면에 나타나면 저절로 알아서 작동`


## How to use

### 아주 쉽습니다!

1. `단독사용`  
원하는 때에 `fadeIn(element)`를 기재하여 fadeIn 함수를 호출합니다.  
ex) `fadeIn(document.getElementById('element1'))`  
`element`에는 각종 선택자`(getElementById(element), getElementByClassName(element)[i])` 등이 들어갈 수 있습니다.

2. `화면에 나타나면 작동`  
fadeIn을 원하는 요소에 `js-fade-in`클래스를 붙여놓습니다.  
```html
<div class="js-fade-in" style="opacity:0;"></div>
```
해당 클래스를 붙일 경우, 화면 높이를 계산해서   
화면에서 스크롤이 벗어날 경우 요소가 fadeOut되며,  
화면 안으로 들어올 경우 요소가 fadeIn됩니다.


### Customize

```javascript
function fadeIn(t) {
	...
	let Timer = 1000;
	...
}
```
`Timer`는 실제 javascript 시간과 같습니다(ms단위)  
위 예시는 1초동안 천천히 FadeIn이 일어나는 코드입니다.  
원한다면 `500`, `800` 등으로 바꿔서 빠른 애니메이션을 유도할 수 있습니다.  
(단, 40의 배수 권장)


### fadeOut

fadeIn과 사용방법은 동일합니다.
```javascript
window.addEventListener('load',function(){
	let elm = document.getElementById('element1');
	fadeOut(elm)
})
```
윈도우의 모든 요소가 로드되자마자 이벤트핸들러는 fadeOut을 호출하는 예시입니다.
