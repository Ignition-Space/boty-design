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
import { useFormItem } from '@boty-design/form-generator';

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
  const btnStyle = {
    color: 'red',
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
      <Button colorSchemes="success">成功</Button>
      <Button colorSchemes="error">失败</Button>
      <Button colorSchemes="#f6cede" style={btnStyle}>
        警告+自定义style
      </Button>
    </div>
  );
}

export default App;
