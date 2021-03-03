// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/self_git/vite-react-boty-desing/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('D:/self_git/vite-react-boty-desing/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
      const React = require('react');
      const renderArgs = require('../../../node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs').default(props);

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            require('dumi-theme-default/src/builtins/Previewer.tsx').default,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${uuid} not found :(`;
      }
    }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('D:/self_git/vite-react-boty-desing/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('D:/self_git/vite-react-boty-desing/node_modules/dumi-theme-default/src/layout.tsx').default],
    "routes": [
      {
        "path": "/button",
        "component": require('D:/self_git/vite-react-boty-desing/dumi/docs/Button.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/Button.md",
          "updatedTime": null,
          "slugs": [
            {
              "depth": 2,
              "value": "Button",
              "heading": "button"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Button"
        },
        "title": "Button"
      },
      {
        "path": "/",
        "component": require('D:/self_git/vite-react-boty-desing/dumi/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": null,
          "slugs": [
            {
              "depth": 2,
              "value": "首页",
              "heading": "首页"
            }
          ],
          "title": "首页"
        },
        "title": "首页"
      }
    ],
    "title": "boty-design",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
