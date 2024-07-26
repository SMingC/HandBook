// 在 JavaScript 中,Range 对象是 Web API 的一部分,用于表示文档中的一个连续的文本范围。它主要用于在文本编辑器、富文本编辑器等场景中选择和操作文本。
/* 
Range 对象的一些主要功能和用途包括:

选择和操作文本:
- 可以使用 Range 对象选择文档中的一段连续文本。
- 可以对选中的文本执行复制、删除、替换等操作。

获取选中文本信息:
- 可以通过 Range 对象获取所选文本的内容、长度、位置等信息。
- 这对于实现剪切、复制、粘贴等功能很有帮助。

标记和高亮显示:
- 可以使用 Range 对象在文档中标记或高亮显示特定的文本。
- 这在文本分析、搜索等场景中很有用。

操作 DOM 结构:
- Range 对象可以用于在文档中插入、删除或替换 DOM 节点。
- 这可以帮助我们动态地修改文档结构。

实现富文本编辑器:
- Range 对象是实现富文本编辑器的关键组件之一。
- 编辑器可以利用 Range 对象提供的功能来实现文本选择、格式化、插入等丰富的编辑功能。
*/
let range = new Range()
