// ユーザーに応じた動的ページを表示させるためのコンポーネント
import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  // 渡ってきたパラメータをidに格納する
  const { id } = useParams();
  return (
    <>
      <h1>動的ページ</h1>
      <p>あなたのidは{id}です</p>
    </>
  );
};
