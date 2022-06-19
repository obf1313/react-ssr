/**
 * @descriptor 路由配置
 * @author obf1313
 */
import Home from './../src/page/Home';
import Detail from './../src/page/Detail';

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