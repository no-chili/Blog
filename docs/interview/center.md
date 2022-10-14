## 垂直居中
高等于行高
``` css{2-3}
.center{
  height: 100px;
  line-height:100px;
}
```
定位加偏移
```css{2,7-9}
.father{
  position: relative;
  width:200px;
  height:200px;
}
.children{
  position: absolute;
  top: 50%;
  transform: translate(0,-50%)
}
```
flex布局
```css{2-3}
.father{
  display: flex;
  align-items: center;
}
```
## 水平居中
子元素为行内元素
```css{2}
.father{
  text-align: center;
}
```
如果元素宽度固定
```css{2}
.children{
  margin:auto;
}
```
定位加偏移
```css{2,7-9}
.father{
  position: relative;
  width:200px;
  height:200px;
}
.children{
  position: absolute;
  left: 50%;
  transform: translate(-50%,0)
}
```
flex布局
```css{2-3}
.father{
  display: flex;
  justify-content: center;
}
```
