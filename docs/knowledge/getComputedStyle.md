> `Window.getComputedStyle()`方法返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有 CSS 属性的值。私有的 CSS 属性值可以通过对象提供的 API 或通过简单地使用 CSS 属性名称进行索引来访问。


>语法
>et style = window.getComputedStyle(element, [pseudoElt]);

getComputedStyle返回的对象和style的区别
style只能获取到内联样式的属性值，getComputedStyle可以获取到外联样式表的值，，包括伪元素样式

```js
const div=document.querySelector('.color')

const styles=getComputedStyle(div)

console.log('computer',styles.height);

console.log('style',div.style.height);
```

```js
 result = getComputedStyle(h3, '::after').content;
```