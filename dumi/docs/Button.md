<!--
 * @Author: Cookie
 * @Date: 2021-03-03 13:15:56
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-05 17:02:36
 * @Description:
-->

---

## Button

```jsx
/**
 * title: 普通配置
 * desc: 参考 antd
 */
import React from "react";
import Button from "@boty-desgin/Button";
export default () => <Button>按钮</Button>;
```

```jsx
/**
 * title: loading
 * desc: 单loading属性存在时，会将点击方法视为异步，用 await 承接
 */

import React from "react";
import Button from "@boty-desgin/Button";
const handlerSyncClick = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      alert("回调结束");
      resolve(true);
    }, 1000);
  });
};
export default () => (
  <Button onClick={handlerSyncClick} loading>
    异步回调
  </Button>
);
```

<API src="../../packages/components/src/Button/index.tsx"></API>
