/*
 * @Author: Cookie
 * @Date: 2021-02-27 16:11:42
 * @LastEditors: Cookie
 * @LastEditTime: 2021-02-27 22:12:33
 * @Description: 
 */
import React, { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)


  const handlerClick = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('sss')
        resolve(true)
      }, 1000)
    })
  }

  return (
    <div className="App">
      <Button onClick={handlerClick} loading={true}>异步按钮</Button>
      <Button onClick={handlerClick} >按钮</Button>
    </div>
  )
}

export default App
