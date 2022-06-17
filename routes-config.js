/**
 * @descriptor 路由配置
 * @author obf1313
 */
import React from 'react';

// 2. 获取数据的方法和逻辑些在哪里？（数据预取同构）
// 但该方法和组件没有任何关联，我们更希望的是每个路由（？）都有自己的 fetch 方法。
// 模拟数据获取
const fetch = (title) => {
  return {
    title: title,
    data: []
  };
}

// 主页
const Home = (props) => {
  return (
    <div>
      {props.data.title}
    </div>
  );
}
// 数据预取方法
Home.getInitialProps = async (opt) => {
  const fetch1 = await fetch('Home1');
  return fetch1;
};

// 详情页
const Detail = (props) => {
  return (
    <div>
      {props.data.title}
    </div>
  );
}
// 数据预取方法
Detail.getInitialProps = async (opt) => {
  const fetch1 = await fetch('Detail');
  return fetch1;
};

const routes = [{
  path: '/',
  exact: true,
  component: Home
}, {
  path: '/detail',
  exact: true,
  component: Detail
}, {
  path: '/detail/:a/:b',
  exact: true,
  component: Detail
}];
export default routes;