/*
 * @Author: Cookie
 * @Date: 2021-02-27 16:11:42
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-02 21:38:49
 * @Description:
 */
import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";

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
      <Button onClick={handlerSyncClick} loading={true} style={{ color: 'red' }} >
        异步按钮
      </Button>
      <Button onClick={handlerClick}>按钮</Button>
      <Button shape="circle">按钮</Button>
    </div>
  );
}

export default App;
