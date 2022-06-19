/**
 * @descriptor 详情页
 * @author obf1313
 */
import React from 'react';
import { get } from '../server/fetch';
import { WORDS_API } from '../server/api';

const Detail = (props) => {
  return (
    <div>
      {props.data.data}
    </div>
  );
}
// 数据预取方法
Detail.getInitialProps = async (opt) => {
  const data = await get(WORDS_API, {});
  return {
    data: data.data
  };
};
export default Detail;