# 移动互联网 _ 2.1 JS 处理网页基础

## 课堂练习

### 写一个小网页

#### 界面要求

- 一个按钮

- 一幅图

  ```javascript
   <img src = "https://www.fudan.edu.cn/_upload/article/images/e7/b4/0af263754b3b9b3ab10732d7ad59/2ba3a78d-4d89-4799-b52b-0e156927a969.jpg">
  ```
  
> 上链接已经 `404 Not Found`，因而自己改用 https://cs.fudan.edu.cn/_upload/site/02/41/577/logo.png：
  
<img src="https://cs.fudan.edu.cn/_upload/site/02/41/577/logo.png" style="zoom: 90%">

#### 功能要求

- 点击按键，图慢慢变大

  `style.height`

  `style.width`

关于定时器：

```javascript
var timer = setInterval(function() { …}, 100); //100毫秒调用一次
clearInterval(timer); //停止定时器
```

* 可以再增加一个会变色的 “Hello World!” 文本

### 作业成果

#### 初始界面

<img src=".\effect_1.PNG" alt="effect_1" style="zoom: 40%;" />

#### 点击放大按键

<img src=".\effect_2.PNG" alt="effect_2" style="zoom: 40%;" />

* 放大过程中该按键被禁用

  > 实现方法：设置按键的 disabled 属性为 "disabled"

* 任意时刻可点击 “`Reset`” 进行复位
