class ZInnerHtml {
  globalHtmlArr: Array<string> = [] // 存放除去script的html
  globalScriptArr: Array<string> = [] // 存放 script标签对象的数组
  globalScriptSrcArr: Array<string> = [] // 存放script的src中js文件地址

  /**
   * @description 插入元素
   * @param {string} id DOM id
   * @param {string} html html字符串
   */
  set (id: string, html: string) {
    this.cleanGlobal()
    const htmlArr: Array<string> = html.split(/<\/script>/i)
    let scripts: Array<{
      text: string,
      src: string
    }> = []
    // 循环格式化js和html
    for (let i: number = 0, len: number = htmlArr.length; i < len; i++) {
      // 获取 <script 前的字符串
      this.globalHtmlArr[i] = htmlArr[i].replace(/<script[\s\S]*$/ig, "")
      scripts[i] = {
        text: '',
        src: ''
      }
      scripts[i].text = htmlArr[i].substring(this.globalHtmlArr[i].length, htmlArr[i].length)
      scripts[i].src = scripts[i].text.substring(0, scripts[i].text.indexOf('>') + 1)
      // 正则匹配src后的字符串
      const srcMatch: RegExpMatchArray = scripts[i].src.match(/src\s*=\s*(\"([^\"]*)\"|\'([^\']*)\'|([^\s]*)[\s>])/i)
      if (srcMatch) { // 存在src
        if (srcMatch[2]) { // src后面使用双引号
          scripts[i].src = srcMatch[2]
        } else if (srcMatch[3]) { // src后面使用单引号
          scripts[i].src = srcMatch[3]
        } else if (srcMatch[4]) { // src后面没引号
          scripts[i].src = srcMatch[4]
        } else {
          scripts[i].src = ''
        }
      } else { // js代码
        scripts[i].src = ''
        scripts[i].text = scripts[i].text.substring(scripts[i].text.indexOf('>') + 1, scripts[i].text.length)
        // 去除注释代码
        scripts[i].text = scripts[i].text.replace(/^\s*<\!--\s*/g, "")
      }
    }

    let documentBuffer: string = ''
    // 循环插入运行js
    for (let i: number = 0, len = scripts.length; i < len; i++) {
      const script: HTMLScriptElement = document.createElement('script')
      if (scripts[i].src) { // 若是src引入的js
        script.src = scripts[i].src
        script.defer = true // dom加载后加载, 只会在src引入的方式下生效
        if (typeof (this.globalScriptSrcArr[script.src]) === 'undefined') {
          this.globalScriptSrcArr[script.src] = true
        }
      } else { // 反之若是js代码
        script.text = scripts[i].text
      }
      script.type = 'text/javascript'
      script.id = this.createGuid()
      this.globalScriptArr[script.id] = script
      // 添加脚本
      document.getElementsByTagName('head').item(0).appendChild(this.globalScriptArr[script.id])
      documentBuffer += this.globalHtmlArr[i]
      document.getElementById(id).innerHTML = documentBuffer

      // 删除脚本
      document.getElementsByTagName('head').item(0).removeChild(document.getElementById(script.id))
      delete this.globalScriptArr[script.id]
    }
    // 收尾工作, 判断是否在html字符串里存在有script标签剩余
    // 有剩余, 则再走一遍set
    // 没有, 则插入dom
    if (documentBuffer.match(/<\/script>/i)) {
      this.set(id, documentBuffer)
    } else {
      document.getElementById(id).innerHTML = documentBuffer
    }
  }

  /**
   * @description 清除全局数组
   */
  cleanGlobal () {
    this.globalHtmlArr = []
    this.globalScriptArr = []
    this.globalScriptSrcArr = []
  }

  /**
   * @description 生成guid
   * @return {string} guid字符串
   */
  createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c: string): string {
      const r: number = Math.random()*16|0
      const v: number = c === 'x' ? r : ( r & 0x3 | 0x8)
      return v.toString(16)
    })
  }
}
