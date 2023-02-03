//主要靠这个函数实现: 将body下的文本节点中的searchWord, 替换为replaceWord
function replaceBodyText(searchWord, replaceWord) {
  var reg = new RegExp(searchWord, "g");
  function replaceNode(node) {
    node.childNodes.forEach(function (v) {
      if (v.nodeName === "SCRIPT") return; //排除<script>标签
      if (!v.hasChildNodes()) {
        if (reg.test(v.textContent))
          v.textContent = v.textContent.replace(reg, replaceWord);
        return;
      }
      replaceNode(v);
    });
  }
  replaceNode(document.body);
}

replaceBodyText(
  "https://github.com/",
  "https://ghproxy.com/https://github.com/"
);
