module.exports = function (plop) {
    plop.setGenerator('component', {
        description: '组件',
        prompts: [{
            type: 'input',
            name: 'name',
            message: '请输入创建组件的名字, 如Button',
            validate: function (value) {
                if ((/([A-Z][a-z]+)+/).test(value)) { return true; }
                return '组件名称必须为驼峰形式';
            }
        }],
        actions: [
            /**
             * TemplateComponent.tsx
             */
            {
                type: 'add',
                path: '../components/src/{{name}}/index.tsx',
                templateFile: './templates/components/TemplateComponent.js'
            },
            /**
             * template-component.less
             */
            {
                type: 'add',
                path: '../components/src/{{name}}/index.less',
                templateFile: './templates/components/template-component.css'
            },
            {
                type: 'modify',
                path: '../components/src/index.ts',
                transform:(fileStr,enterObj)=>{
                    return fileStr + '\n' + `export { default as ${enterObj.name} } from './${enterObj.name}';`
                }
            }
        ]
    });
};