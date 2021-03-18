/*
 * @Author: Cookie
 * @Date: 2021-02-27 16:11:42
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-03 12:34:30
 * @Description:
 */
import React, { useState } from 'react';
import { Button } from '@boty-design/components';
import { LoadingOutlined, CheckOutlined } from '@ant-design/icons';
import { useFormItem } from '@boty-design/form-generator';
import Form from '@boty-design/form-generator/src/components/Form';
import Field from '@boty-design/form-generator/src/components/Field';

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

  console.log('render');
  return (
    <div className="App">
      <Button onClick={handlerSyncClick} loading={true}>
        异步按钮
      </Button>
      <Button onClick={handlerClick}>
        按钮
      </Button>
      <Button shape="circle" icon={<LoadingOutlined />}></Button>
      <Button colorSchemes="success"  icon={<CheckOutlined />}>成功</Button>
      <Button colorSchemes="error">失败</Button>
      <Button colorSchemes="#f6cede" style={btnStyle}>
        警告+自定义style
      </Button>

      <Form
        initialValues={{ email: 1, username: 'boty', password: '123456' }}
        validationSchema={{
          password: [
            (val, context) => {
              return '密码饿2';
            },
            (val) => {
              return new Promise((resolve) => {
                if (val !== 'boty') {
                  setTimeout(() => resolve('密码错误'), 500);
                } else {
                  resolve();
                }
              });
            },
          ],
          username: (val, context) => {},
        }}
      >
        {({ values, errors, validators, handleChange }) => (
          <div>
            {errors.password}
            <input
              value={values.password}
              onChange={(e) => {
                console.log('object');
                handleChange.password(e.target.value);
                validators.password(e.target.value);
              }}
            ></input>

            <Field name="email"></Field>
          </div>
        )}
      </Form>
    </div>
  );
}

export default App;
