// App.jsの<Switch>の設定をこちらに移管する
import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page2 } from "../Page2";
import { Page1Routes } from "./Page1Routes";

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
        )}
      />
      {/* パスが`/page2`だったら、Page2コンポーネントを表示させる */}
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
