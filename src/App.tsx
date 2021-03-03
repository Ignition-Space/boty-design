/*
 * @Author: Cookie
 * @Date: 2021-02-27 16:11:42
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-03 12:34:30
 * @Description:
 */
import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import {
  LoadingOutlined,
} from '@ant-design/icons';

function App() {
  const [count, setCount] = useState(0);

  const handlerSyncClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("sss");
        resolve(true);
      }, 1000);
    });
  };

  const handlerClick = () => {
    console.log("sss");
  };

  return (
    <div className="App">
      <Button onClick={handlerSyncClick} loading={true}  >
        异步按钮
      </Button>
      <Button onClick={handlerClick} icon={<LoadingOutlined />}>按钮</Button>
      <Button shape="circle" icon={<LoadingOutlined />}></Button>
    </div>
  );
}

export default App;
