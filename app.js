/**
 * @descriptor 客户端路由
 * @author obf1313
 */
import routes from './routes-config';
import { Layout, Route, Switch } from 'react-router-dom';

const App = () => {
  <Layout>
    <Switch>
      {
        routes.map((item, index) => (
          <Route
            path={item.path}
            key={index}
            exact={item.exact}
            render={item.component}
          />
        ))
      }
    </Switch>
  </Layout>
}
export default App;