const React = require('react');
const { renderToString } = require('react-dom/server');
const express = require('express');

const app = express();

// React 组件
const Index = (props) => {
  return (
    <div>{props.data.title}</div>
  );
}

// 模拟数据获取
const fetch = () => {
  return {
    title: 'react ssr',
    data: []
  };
}

app.get('/', (req, res) => {
  const data = fetch();
  res.send(renderToString(<Index data={data} />))
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});