// useLocationでstateを取得する
import { useLocation } from "react-router-dom";
export const Page1DetailA = () => {
  const { state } = useLocation();
  // 前ページから受け取ったstateを表示
  console.log(state);
  return (
    <>
      <h1>Page1の詳細ページAです</h1>
    </>
  );
};
