## flex容器（flex container）与项目（flex item）

```Css
.box {
  display: flex;
}
```

- 主轴（main axis）：main start、main end、main size
- 交叉轴（cross axis）：cross start、main end、main size

## 容器属性

- 方向，flex-direction：row | row-reverse | column | column-reverse
- 换行，flex-wrap：nowrap | wrap | wrap-reverse
- 上两个的简写，flex-flow：[flex-direction] || [flex-wrap]
- 主轴对齐方式，justify-content：flex-start | flex-end | center | space-between | space-around
- 交叉轴对齐方式，align-items：flex-start | flex-end | center | baseline | stretch
- 多轴线对齐方式，align-content：flex-start | flex-end | center | space-between | space-around | stretch

## 项目属性

- 顺序，order：[integer]
- 放大比例，flex-grow：[number]
- 缩小比例，flex-shrink：
- 原始大小，flex-basis：[length] | auto
- 上三个的简写，flex：none |  [flex-grow] || [flex-shrink] ||  [flex-basis] 
- 单独对齐方式，align-self：auto | flex-start | flex-end | center | baseline | stretch