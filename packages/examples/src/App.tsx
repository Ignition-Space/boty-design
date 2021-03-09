/*
 * @Author: Cookie
 * @Date: 2021-02-27 16:11:42
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-03 12:34:30
 * @Description:
 */

import React, { useState } from 'react';
import { Button } from '@boty-design/components';
import { LoadingOutlined } from '@ant-design/icons';
import FormExample from './FormExample';

function App() {
  const [count, setCount] = useState(0);

  const handlerSyncClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('sss');
        resolve(true);
      }, 1000);
    });
  };

  const handlerClick = () => {
    console.log('sss');
  };

  return (
    <div className="App">
      <Button onClick={handlerSyncClick} loading={true}>
        异步按钮rrr
      </Button>
      <Button onClick={handlerClick} icon={<LoadingOutlined />}>
        按钮
      </Button>
      <Button shape="circle" icon={<LoadingOutlined />}></Button>

      <FormExample></FormExample>
    </div>
  );
}

export default App;
