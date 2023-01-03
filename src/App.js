// react-rooter-domから必要な機能をインポートする
// <BrowserRouter></BrowserRouter>で囲った範囲でrootingを有効にする
// <Link>はaタグのようなものでページ遷移を表現する。toに遷移するアドレスを設定する
// コンポーネントの出しわけはSwitch、ルートの設定はRouteを使用する
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import "./styles.css";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
      </div>
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
            <Switch>
              {
                // propsにルーティングに関わる情報が入ってくる
                // この中の、match.urlを使えばわざわざpage1を下層ページ文書く必要がなくなる
                // console.log(props)
                console.log(url)
              }
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detail-a`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detail-b`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />
        {/* パスが`/page2`だったら、Page2コンポーネントを表示させる */}
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}