# Modal

## 已完成功能
| 参数 | 说明	| 类型 | 默认值 | 版本 |
| - | - | - | - | - |
- [ ] afterClose	Modal 完全关闭后的回调	function	-	
- [x] bodyStyle	Modal body 样式	CSSProperties		
- [x] cancelButtonProps	cancel 按钮 props	ButtonProps	-	
- [x] cancelText	取消按钮文字	ReactNode	取消	
- [ ] centered	垂直居中展示 Modal	boolean	false	
- [x] closable	是否显示右上角的关闭按钮	boolean	true	
- [ ] closeIcon	自定义关闭图标	ReactNode	`<CloseOutlined />`	
- [x] confirmLoading	确定按钮 loading	boolean	false	
- [ ] destroyOnClose	关闭时销毁 Modal 里的子元素	boolean	false	
- [ ] focusTriggerAfterClose	对话框关闭后是否需要聚焦触发元素	boolean	true
- [x] footer	底部内容，当不需要默认底部按钮时，可以设为 footer={null}	ReactNode	(确定取消按钮)	
- [ ] forceRender	强制渲染 Modal	boolean	false	
- [x] getContainer	指定 Modal 挂载的节点，但依旧为全局展示，false 为挂载在当前位置	HTMLElement | () => HTMLElement | Selectors | false	document.body	
- [ ] keyboard	是否支持键盘 esc 关闭	boolean	true	
- [x] mask	是否展示遮罩	boolean	true	
- [x] maskClosable	点击蒙层是否允许关闭	boolean	true	
- [x] maskStyle	遮罩样式	CSSProperties		
- [ ] modalRender	自定义渲染对话框	(node: ReactNode) => ReactNode
- [x] okButtonProps	ok 按钮 props	ButtonProps	-	
- [x] okText	确认按钮文字	ReactNode	确定	
- [x] okType	确认按钮类型	string	primary	
- [x] style	可用于设置浮层的样式，调整浮层位置等	CSSProperties	-	
- [x] title	标题	ReactNode	-	
- [x] open	对话框是否可见
- [x] width	宽度	string | number	520	
- [x] wrapClassName	对话框外层容器的类名	string	-	
- [x] zIndex	设置 Modal 的 z-index	number	1000	
- [x] onCancel	点击遮罩层或右上角叉或取消按钮的回调	function(e)	-	
- [x] onOk	点击确定回调	function(e)	-