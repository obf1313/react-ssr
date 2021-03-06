/**
 * @descriptor 服务
 * @author obf1313
 */
// https://juejin.cn/post/6844903943902855176
import React from 'react';
import http from 'http';
import { renderToString } from 'react-dom/server';
import { matchRoutes } from 'react-router-config';
import routes from './route/routes-config';

// 1. 双端路由如何维护？
// 首先我们会发现我在 server 端定义了路由 '/'，但是在 react SPA 模式下我们需要使用 react-router 来定义路由。那是不是就需要维护两套路由呢？
// 定义了路由 /，但在 SPA 模式下我们需要使用 react-router 定义路由。
http.createServer(async (req, res) => {
  const url = req.url;
  // 简单容错，排除图片等资源文件的请求
  if (url.indexOf('.') !== -1) {
    res.end('');
    return false;
  }
  res.writeHead(200, {
    'Content-Type': 'text.html'
  });
  // 查找组件
  const branch = matchRoutes(routes, url);
  // 得到组件
  const Component = branch[0].route.component;
  // 数据预取
  const data = await Component.getInitialProps(branch[0].match.params);
  // 将组件渲染为 html 字符串
  const html = renderToString(<Component data={data} />);
  res.end(html);
}).listen(3000, () => {
  console.log('http://localhost:3000');
});

// 3. 服务端 html 节点无法重用
// 虽然组件在服务端得到了数据，也能渲染到浏览器内，但是当浏览器端进行组件渲染的时候直出的内容会一闪而过消失。

// 引出同构，ssr 的核心。
// 所谓同构就是采用一套代码，构建双端（server 和 client）逻辑，最大限度的重用代码，不用维护两套代码。
// 而传统的服务端渲染是无法做到的，react 的出现打破了这个瓶颈，并且现在已经得到了比较广泛的应用。
