<template>
  <div
    style="width: 260px;"
    class="lastline-space-ellipsis js-toggle-box"
    title="你让我只 fdkfjkdsjfdsj dfjdsfadf 5555555 aaaaaa 显示2行就只显示2行啊，你让我只显示2行就只显示2行啊，你让我只显示2行就只显示2行啊"
  >
    你让我只显示2行就只显示2行啊，你让我只显示2行就只显示2行啊，你让我只显示2行就只显示2行啊你让我只显示2行就只显示2行啊，你让我只显示2行就只显示2行啊，你让我只显示2行就只显示2行啊<!--这里的内容是为了撑开高度-->
  </div>
</template>

<style scoped>
.lastline-space-ellipsis {
  position: relative;
  max-height: 40px; /*用像素表示，不要用em，以免造成不同浏览器下计算出现小数点取舍不同导致1像素的差距【行高*截取行数】*/
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all; /*强制打散字符*/
  line-height: 20px;
  color: #fff; /*同背景色*/
}
.lastline-space-ellipsis::before,
.lastline-space-ellipsis::after {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  color: #333; /*实际文本颜色*/
  content: attr(title);
}
.lastline-space-ellipsis::before {
  display: block;
  z-index: 1; /*显示在最上面，展示前面的(截取行数-1)行字符*/
  max-height: 20px; /*根据行高和截取行数调整，值为[(截取行数-1)*行高]*/
  overflow: hidden;
  background-color: #fff; /*同背景色*/
}
.lastline-space-ellipsis::after {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; /*截取行数*/
  text-indent: -3em; /*行首缩进字符数，值为[-(截取行数-1)*尾部留空字符数]，取负值把每行多padding-right的部分给缩进回去*/
  padding-right: 3em; /*尾部留空字符数*/
  /*margin-left: -3em;*/
}
</style>
