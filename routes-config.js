/**
 * @descriptor 路由配置
 * @author obf1313
 */
const Detail = () => {
  return (
    <div>
      detail
    </div>
  );
}
const Home = () => {
  return (
    <div>
      home
    </div>
  );
}
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