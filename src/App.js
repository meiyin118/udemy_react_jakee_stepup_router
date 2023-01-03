// react-rooter-domから必要な機能をインポートする
// <BrowserRouter></BrowserRouter>で囲った範囲でrootingを有効にする
// <Link>はaタグのようなものでページ遷移を表現する。toに遷移するアドレスを設定する
// コンポーネントの出しわけはSwitch、ルートの設定はRouteを使用する
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/router";

import "./styles.css";

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
      {/* ルート定義を分割 */}
      <Router />
    </BrowserRouter>
  );
}
