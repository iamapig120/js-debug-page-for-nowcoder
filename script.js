/**
 * 牛客网OJ环境特殊语句的实现
 * @author Handle
 * @version 0.1
 */

;(function() {

  /**
   * 定义获取输入的方法
   * @returns {string}
   */
  const inputText = () => document.getElementById('input').value

  /**
   * 逐行读取Generator函数，实在是没法写成箭头外观啊
   */
  function* readlineGenerator() {
    //依照换行符分割
    const text = inputText().split('\n')
    let line = 0
    //当有剩余行时
    while (line < text.length) {
      //暂停函数，返回该行文本内容
      yield text[line++]
    }
  }

  //定义一个可枚举对象
  const line = readlineGenerator()

  //定义逐行读取方法
  const readline = () => line.next().value

  //定义输出方法，用于直接F12运行用
  const print = str => {
    document.getElementById('output').value += str
  }

  //对外暴露方法
  window.readline = readline
  window.print = print

  //绑定RUN 按钮事件
  document.getElementById('runBtn').addEventListener('click', () => {
    //清空输出
    document.getElementById('output').value = ''
    //获取超时时间
    const timeout = document.getElementById('timeout').value
    //获取程序代码
    codeText = document.getElementById('code').value
    //对齐使用匿名函数，进行闭包处理
    codeText = `(function() {${codeText}})()`
    //在Web Worker中定义一些方法
    codeText = `
    const inputText = \`${document.getElementById('input').value}\`
    function* readlineGenerator() {
      const text = inputText.split('\\n')
      let line = 0
      while (line < text.length) yield text[line++]
    }
    const line = readlineGenerator()
    const readline = () => line.next().value    
    const print = str => {
      console.log(str)
      self.postMessage(str.toString())
    }
    //报错则传出
    try{
      ${codeText}
    }
    catch(e){
      print(e)
    }
    `
    //构建一个Blob对象
    const blob = new Blob([codeText])
    //通过window.URL创建一个url指向Blob对象，并构建Worker —— 由红黑联盟学习得到
    const worker = new Worker(window.URL.createObjectURL(blob))
    //监听Web Worker收信事件
    worker.addEventListener('message', e => print(e.data))
    //超时直接停止Worker
    setTimeout(() => {
      worker.terminate()
    }, timeout)
  })
})()
