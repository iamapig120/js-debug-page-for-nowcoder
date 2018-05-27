#用于牛客网 v8 引擎评测机的本地测试页面#

###项目地址###
GitHub <a href="https://github.com/iamapig120/js-debug-page-for-nowcoder" rel="noopener" target="_blank">https://github.com/iamapig120/js-debug-page-for-nowcoder</a>
Gitee <a href="https://gitee.com/bysb/js-debug-page-for-nowcoder" rel="noopener" target="_blank">https://gitee.com/bysb/js-debug-page-for-nowcoder</a>

> **功能和界面 UI 等尚不完善，故欢迎提出各种意见**

###为什么做这个？###
蓝桥赛后 => 无所事事 => 随便做题 => 发现牛客网允许使用 JavaScript 提交，并定义了专有输入输出方法 **_readline()_** 和 **_print()_**，但是并**没有**提供靠谱测试的随意测试的环境

作为一个自诩为前端汪的大专学渣，怎么能忍受这种没法测试的 OJ 的存在呢？故利用 Web Worker 开额外线程，使用 Blob URL 替代通常 js 文件的 url 地址，方便动态地读取代码并执行，使用 Generator 函数来实现 readline()的操作

最终写了这么一个小玩意出来
UI 根本没画没设计，做这玩意初衷只是为了能够有个可控的输入输出而已，笑

###可能需要的环境###
使用了 Generator 函数，Blob 对象和 Web Worker 所以请使用现代浏览器进行浏览和测试。根据 caniuse 显示，基本的浏览器需求为 Chrome 49

###框体说明###
Timeout: 超时限制，单位毫秒
Code: 要提交或测试的代码源码
Input: **全部**的输入内容
RUN: 立即执行 Code 内代码并将 Input 内容作为输入，输出结果显示在 Output 中
Output: 输出窗口

###额外的特性###
除了常规的在文本框粘贴代码执行外，亦可在输入粘贴输入文本后直接 F12 调出控制台来粘贴代码执行，可以更方便的使用浏览器进行调试而无需输出各种乱七八糟的内容

###在线使用###
链接 <a href="https://www.bysb.net/study/nowcoder/" target="_blank">https://www.bysb.net/study/nowcoder/</a>
