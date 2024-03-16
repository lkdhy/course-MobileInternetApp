# 移动互联网 _ 2.1 JS 处理网页基础

## 课堂练习

### 写一个小网页

#### 界面

- 一个按钮

- 一幅图

  ```javascript
   <img src = "https://www.fudan.edu.cn/_upload/article/images/e7/b4/0af263754b3b
   9b3ab10732d7ad59/2ba3a78d-4d89-4799-b52b-0e156927a969.jpg">
  ```

  > 已经 `404 Not Found`，自己改用 https://cs.fudan.edu.cn/_upload/site/02/41/577/logo.png：

  <img src="https://cs.fudan.edu.cn/_upload/site/02/41/577/logo.png" style="zoom: 90%">

#### 功能

- 点击按键，图慢慢变大

  `style.height`

  `style.width`

关于定时器：

```javascript
var timer = setInterval(function() { …}, 100); //100毫秒调用一次
clearInterval(timer); //停止定时器
```