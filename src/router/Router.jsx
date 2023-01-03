// App.jsの<Switch>の設定をこちらに移管する
import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      {/* exactでパスが完全一致か？の判定 */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* 
          renderメソッドの引数にコンポーネントを書く方法もある。
          Page1配下でネストされたコンポーネントのルーティング設定をする
        */}
      {/* <Route path="/page1" render={() => <Page1 />} /> */}
      <Route
        path="/page1"
        render={({ match: { url } }) => (
            // propsにルーティングに関わる情報が入ってくる
            // この中の、match.urlを使えばわざわざpage1を下層ページ文書く必要がなくなる
            // console.log(props)
            //   console.log(url)
            // 切り出す際に、何が違うか？を考える。（path/exact/レンダリングするコンポーネント）
            //   <Switch>
            //     <Route exact path={url}>
            //       <Page1 />
            //     </Route>
            //     <Route path={`${url}/detail-a`}>
            //       <Page1DetailA />
            //     </Route>
            //     <Route path={`${url}/detail-b`}>
            //       <Page1DetailB />
            //     </Route>
            //   </Switch>
            <Switch>
                {Page1Routes.map((route) => (
                    <Route
                        key={route.path}
                        exact={route.exact}
                        path={`${url}${route.path}`}
                    >
                    {route.children}
                    </Route>
                ))}
            </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({match:{ url }}) => (
            <Switch>
                {Page2Routes.map((route) => (                
                    <Route 
                        key={route.path}
                        exact={route.exact}
                        path={`${url}${route.path}`}
                    >
                        {route.children}
                    </Route>
                ))}
            </Switch>
        )}
      />
    </Switch>
  );
};
