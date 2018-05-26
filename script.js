;(function() {
  const inputText = () => document.getElementById('input').value

  function* readlineGenerator() {
    const text = inputText().split('\n')
    let line = 0
    while (line < text.length) yield text[line++]
  }

  const line = readlineGenerator()
  const readline = () => line.next().value

  const print = str => {
    //console.log(str)
    document.getElementById('output').value += str
  }

  window.readline = readline
  window.print = print

  document.getElementById('runBtn').addEventListener('click', () => {
    document.getElementById('output').value = ''
    const timeout = document.getElementById('timeout').value
    codeText = document.getElementById('code').value
    codeText = `(function() {${codeText}})()`
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
    try{
      ${codeText}
    }
    catch(e){
      print(e)
    }
    `
    const blob = new Blob([codeText])
    const worker = new Worker(window.URL.createObjectURL(blob))
    worker.addEventListener('message', e => print(e.data))
    setTimeout(() => {
      worker.terminate()
      //document.getElementById('output').value = 'TIMEOUT!'
    }, timeout)
  })
})()
