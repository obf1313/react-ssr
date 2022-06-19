/**
 * @descriptor 主页
 * @author obf1313
 */
import React from 'react';
import { get } from '../server/fetch';
import { WORDS_API } from '../server/api';

const Home = (props) => {
  return (
    <div>
      {props.data.data}
    </div>
  );
}

// 2. 获取数据的方法和逻辑些在哪里？（数据预取同构）
// 但该方法和组件没有任何关联，我们更希望的是每个路由（？）都有自己的 fetch 方法。
// 数据预取方法
Home.getInitialProps = async (opt) => {
  const data = await get(WORDS_API, {});
  return {
    data: data.data
  };
};
export default Home;