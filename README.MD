# 用于牛客网 v8引擎评测机的本地测试页面

### 项目地址

GitHub [https://github.com/iamapig120/js-debug-page-for-nowcoder](https://github.com/iamapig120/js-debug-page-for-nowcoder)
Gitee [https://gitee.com/bysb/js-debug-page-for-nowcoder](https://gitee.com/bysb/js-debug-page-for-nowcoder)

> **功能和界面UI等尚不完善，故欢迎提出各种意见**

### 为什么做这个？

蓝桥赛后 => 无所事事 => 随便做题 => 发现牛客网允许使用JavaScript提交，
并定义了专有输入输出方法 **readline()** 和 **print()**，
但是并**没有**提供靠谱测试的随意测试的环境

作为一个自诩为前端汪的大专学渣，怎么能忍受这种没法测试的OJ的存在呢？
故利用Web Worker开额外线程，使用Blob URL替代通常js文件的url地址，方便动态地读取代码并执行，
使用Generator函数来实现readline()的操作

最终写了这么一个小玩意出来
UI根本没画没设计，做这玩意初衷只是为了能够有个可控的输入输出而已，笑

### 可能需要的环境

使用了Generator函数，Blob对象和Web Worker所以请使用现代浏览器进行浏览和测试。
根据caniuse显示，基本的浏览器需求为 Chrome 49

### 框体说明

Timeout: 超时限制，单位毫秒
Code: 要提交或测试的代码源码
Input: **全部**的输入内容
RUN: 立即执行Code内代码并将Input内容作为输入，输出结果显示在Output中
Output: 输出窗口

### 额外的特性

除了常规的在文本框粘贴代码执行外，亦可在输入粘贴输入文本后直接F12调出控制台来粘贴代码执行，
可以更方便的使用浏览器进行调试而无需输出各种乱七八糟的内容

### 在线使用

链接 [https://www.bysb.net/study/nowcoder/](https://www.bysb.net/study/nowcoder/)
