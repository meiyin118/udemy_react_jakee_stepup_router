// ユーザーに応じた動的ページを表示させるための便利なhooks
import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  // 渡ってきたパラメータをidに格納する
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <>
      <h1>動的ページ</h1>
      <p>パラメータは{id}です</p>
      <p>クエリパラメータは{query.get("name")}です</p>
    </>
  );
};
