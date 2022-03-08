# Vanilla fadeIn

`Jquery`없이 페이드인 기능을 사용하는 분들을 위한 스크립트 입니다.
별도의 CSS나 라이브러리가 전혀 필요 없습니다.

[Demo](https://www.gloomy-store.com/demo/vanillaFadeIn/)

### CDN

javascript
```html
<script src="https://cdn.gloomy-store.com/vanillaFadeIn/vanillaFadeIn.js"></script>
```

## Type

두 가지 타입으로 사용이 가능합니다.
1. `단독사용`
2. `화면에 나타나면 작동`

1. 
원하는 때에 `fadeIn(element)`를 기재하여 fadeIn 함수를 호출합니다.
ex) `fadeIn(document.getElementById('element1'))`

2.
fadeIn을 원하는 요소에 `js-fade-in`클래스를 붙여놓습니다.

```html
<div class="js-fade-in" style="opacity:0;"></div>
```
해당 클래스를 붙일 경우, 화면 높이를 계산해서 
화면에서 스크롤이 벗어날 경우 요소가 fadeOut되며,
화면 안으로 들어올 경우 요소가 fadeIn됩니다.

## Property

모든 속성은 `data-sa-*`로 사용합니다.

```html
<div
    data-sa-offset="200px"
    data-sa-delay="50"
    data-sa-duration="1000"
    data-sa-once="false"
>
</div>
```


### fadeOut

fadeIn과 사용방법은 동일합니다.
```html
<sctipt>
	window.addEventListener('load',function(){
		fadeOut(document.getElementById('element1'))
	})
</sctipt>
```
해당 앨리먼트의 애니메이션이 스크롤에 따라 `반복`됩니다.

`기본값은 true`이며, `boolean`입니다.